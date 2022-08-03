import { Post } from "../App";

// TodoListItem

interface PostInListProp extends Post {
  post: Post;
  onDelete: (index: number) => void;
}

export default function PostInList({ post, onDelete }: PostInListProp) {
  <div>
    <button onClick={() => onDelete(post.index)}>X</button>
  </div>;
}
