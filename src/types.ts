export type Repository = {
  id: number;
  owner: string;
  name: string;
  host: string;
  deleted: boolean;
  createdAt: number;
  lastCommit: string;
};
