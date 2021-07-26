export interface Repository {
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  primaryLanguage: {
    name: string;
    color: string;
  };
  stargazerCount: number;
  url: string;
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
