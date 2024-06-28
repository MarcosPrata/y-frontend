import { Post } from "@/types";

export type PostState = {
  posts: Post[];
  loading: boolean;
  error: string | null;
}