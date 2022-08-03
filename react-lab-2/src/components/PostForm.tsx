import React, { useState } from "react";
import { Post } from "../App";
import "./PostForm.css";

// TodoForm

// interface PostFormProps {
//   onSubmit: (post: Post) => void;
//   onClose: (post: Post) => void;
// }

export default function PostForm(props: {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}) {
  const [post, setPost] = useState<Post>({ title: "", thought: "" });

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    return setPost({ title: e.target.value, thought: post.thought });
  }

  function handleThoughtChange(e: React.ChangeEvent<HTMLInputElement>) {
    return setPost({ title: post.title, thought: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    props.onSubmit(post);
    clearFormValues();
    props.onClose();
  }

  function clearFormValues() {
    setPost({ title: "", thought: "" });
  }

  return (
    <form className="modal" onSubmit={props.onClose}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="title">Title</h4>
          <input
            type="text"
            name="post"
            placeholder="Enter a title"
            value={post.title}
            onChange={handleTitleChange}
          />
          <div className="modal-body">
            <h4 className="thought">Thought</h4>
            <input
              type="text"
              name="post"
              placeholder="Enter a thought"
              value={post.thought}
              onChange={handleThoughtChange}
            />
            <div className="modal-footer">
              <button onClick={handleSubmit}>Add Post</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
