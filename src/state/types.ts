export interface Repository {
  created_at: Date;
  description: string;
  id: string;
  language: string;
  name: string;
  stargazer_count: number;
  svn_url: string;
}

export interface Repositories {
  nodes: Repository[];
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
  };
}

export interface Viewer {
  id: string;
  login: string;
  repositories: Repositories;
}
