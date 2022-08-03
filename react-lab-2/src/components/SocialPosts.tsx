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

  function handleOpenThought() {
    setThought(true);
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

  function handleSubmitPost(post: Post) {
    setPostList([post, ...postList]);
    console.log(post.title);
  }

  function handleCloseForm() {
    setThought(false);
  }

  return (
    <div className="my-thoughts">
      <h1 style={{ fontFamily: "Homemade Apple" }}>My Thoughts</h1>
      <div className="button-container">
        <button className="new-thought-button" onClick={handleOpenThought}>
          New Thought
        </button>
      </div>
      {thought ? (
        <PostForm onSubmit={handleSubmitPost} onClose={handleCloseForm} />
      ) : null}
      {postList.map((post, index) => (
        <PostInList post={post} postIndex={index} onDelete={handleDeletePost} />
      ))}
    </div>
  );
}
