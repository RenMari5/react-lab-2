import { Post } from "../App";

// TodoListItem

interface PostInListProps {
  post: Post;
  onDelete: (post: Post) => void;
}
