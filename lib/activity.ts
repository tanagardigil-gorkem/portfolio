export type ContributionDay = {
  date: string;
  count: number;
};

export type GitHubActivity = {
  total: number;
  days: ContributionDay[];
};
