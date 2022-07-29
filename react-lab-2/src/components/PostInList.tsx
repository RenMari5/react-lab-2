import { Post } from "../App";

interface PostInListProps {
  post: Post;
  onDelete: (post: Post) => void;
}
