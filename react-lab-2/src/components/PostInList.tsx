import { Post } from "../App";
import { library } from "@fortawesome/fontawesome-svg-core";

// TodoListItem

interface PostProp extends Post {
  post: Post;
  onDelete: (index: number) => void;
}

export default function PostInList({ post, onDelete }: PostProp) {
  <div style={{ display: "flex", flexDirection: "column" }}>
    <p>{post.title}</p>
    <button onClick={() => onDelete(post.index)}>X</button>
  </div>;
}
