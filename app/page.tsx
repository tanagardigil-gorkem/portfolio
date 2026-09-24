import PortfolioShell from "../components/PortfolioShell";
import { getGitHubActivity } from "../lib/github-contributions";

export default async function HomePage() {
  const activity = await getGitHubActivity();
  return <PortfolioShell activity={activity} />;
}
