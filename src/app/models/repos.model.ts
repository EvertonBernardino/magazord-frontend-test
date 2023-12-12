export interface Repos{
  name: string;
  owner: {
    login: string,
  },
  stargazers_count: any,
  forks?: number,
  html_url: string,
  language?: string,
  description?: string,
}
