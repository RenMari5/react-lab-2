import { useState } from "react";
import { Post } from "../App";
import PostInList from "./PostInList";
import Modal from "react-modal";
import "./SocialPosts.css";

// App

export default function SocialPost({}) {
  const [thought, setThought] = useState(false);
  const [postList, setPostList] = useState<Post[]>([]);

  function handleOpenThought(e: React.ChangeEvent<HTMLInputElement>) {
    return <h1>Hello Modal</h1>;
  }

  // function handleSubmit(post: Post) {
  //   setPostList([post, ...postList]);
  // }

  function deletePost(index: number) {
    return setPostList((prev) => {
      const newList = prev.slice(0);
      newList.splice(index, 1);
      return newList;
    });
  }

  return (
    <div className="my-thoughts">
      <header style={{ fontFamily: "Homemade Apple" }}>My Thoughts</header>
      <button>New Thought</button>
      {/* <PostInList onDelete={deletePost} /> */}
    </div>
  );
}
