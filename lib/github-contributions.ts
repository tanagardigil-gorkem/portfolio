import { githubLogin } from "./site";
import type { GitHubActivity } from "./activity";

const QUERY = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

export async function getGitHubActivity(): Promise<GitHubActivity | null> {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  if (!token) {
    console.warn(
      "GitHub contributions skipped: set GITHUB_TOKEN at build time."
    );
    return null;
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "gorkemtanagardigil-portfolio",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { login: githubLogin },
      }),
      cache: "force-cache",
    });

    if (!response.ok) {
      console.warn(`GitHub contributions fetch failed: ${response.status}`);
      return null;
    }

    const payload = (await response.json()) as {
      errors?: { message: string }[];
      data?: {
        user?: {
          contributionsCollection?: {
            contributionCalendar?: {
              totalContributions: number;
              weeks: {
                contributionDays: { date: string; contributionCount: number }[];
              }[];
            };
          };
        };
      };
    };

    if (payload.errors?.length) {
      console.warn(
        `GitHub contributions query failed: ${payload.errors[0]?.message ?? "unknown error"}`
      );
      return null;
    }

    const calendar =
      payload.data?.user?.contributionsCollection?.contributionCalendar;
    if (!calendar) return null;

    const days = calendar.weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
      }))
    );

    if (days.length === 0) return null;

    return { total: calendar.totalContributions, days };
  } catch (error) {
    console.warn(
      `GitHub contributions fetch error: ${error instanceof Error ? error.message : "unknown error"}`
    );
    return null;
  }
}
