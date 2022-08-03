import { Post } from "../App";

// TodoForm

interface PostFormProps {
  onSubmit: (post: Post) => void;
  onClose: (post: Post) => void;
}
