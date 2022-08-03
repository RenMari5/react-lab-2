import { Post } from "../App";
import { library } from "@fortawesome/fontawesome-svg-core";

// TodoListItem

// interface PostProp {
//   posts: Post[];
//   onDelete: (index: number) => void;
//   postIndex: number;
// }

export default function PostInList(props: {
  post: Post;
  postIndex: number;
  onDelete: (index: number) => any;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>{props.post.title}</p>
      <button onClick={() => props.onDelete(props.postIndex)}>X</button>
    </div>
  );
}
