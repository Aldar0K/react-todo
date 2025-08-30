import { User } from 'entities/user';

export type Comment = {
  id: string;
  user: User;
  text: string;
};
