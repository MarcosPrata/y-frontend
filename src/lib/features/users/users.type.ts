import { User } from "@/types";

export type UserState = {
  users: User[];
  loading: boolean;
  error: string | null;
}
