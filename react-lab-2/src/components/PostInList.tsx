import { Post } from "../App";
import { library } from "@fortawesome/fontawesome-svg-core";

// TodoListItem

interface PostProp extends Post {
  posts: Post[];
  onDelete: (index: number) => void;
}

export default function PostInList({ posts, onDelete }: PostProp) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button onClick={() => onDelete(posts.index)}>X</button>
    </div>
  );
}
