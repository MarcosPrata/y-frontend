import { Comment } from "@/types";

export type CommentState = {
  comments: Comment[];
  loading: boolean;
  error: string | null;
}
