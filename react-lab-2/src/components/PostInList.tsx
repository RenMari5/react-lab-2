import { Post } from "../App";
import { library } from "@fortawesome/fontawesome-svg-core";

// TodoListItem

interface PostProp {
  posts: Post[];
  onDelete: (index: number) => void;
}

export default function PostInList(props: {
  post: Post;
  onDelete: (index: number) => any;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>{props.post.title}</p>
      <button onClick={() => props.onDelete(props.post.index)}>X</button>
    </div>
  );
}
