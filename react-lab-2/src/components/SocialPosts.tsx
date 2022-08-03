import { useState } from "react";
import { Post } from "../App";
import PostInList from "./PostInList";
import Modal from "react-modal";
import "./SocialPosts.css";
import PostForm from "./PostForm";

// App

export default function SocialPost({}) {
  const [thought, setThought] = useState(false);
  const [postList, setPostList] = useState<Post[]>([]);

  function handleOpenThought(e: React.ChangeEvent<HTMLInputElement>) {
    if (!thought) {
      return null;
    }
  }

  // function handleSubmit(post: Post) {
  //   setPostList([post, ...postList]);
  // }

  function handleDeletePost(index: number) {
    return setPostList((prev) => {
      const newList = prev.slice(0);
      newList.splice(index, 1);
      return newList;
    });
  }

  function handleSubmitPost(index: number) {
    return setPostList((postList) => {
      const newList = postList.push();
      return newList;
    });
  }

  function handleClosePost {

  }

  return (
    <div className="my-thoughts">
      <header style={{ fontFamily: "Homemade Apple" }}>My Thoughts</header>
      <button className="new-thought-button" onClick={() => handleOpenThought}>
        New Thought
      </button>
      <PostForm
        post={post}
        onSubmit={handleSubmitPost}
        onClose={handleClosePost}
      />
      {postList.map((post, index) => (
        <PostInList post={post} postIndex={index} onDelete={handleDeletePost} />
      ))}
    </div>
  );
}
