import React, { useState } from "react";
import { Post } from "../App";
import "./PostForm.css";

// TodoForm

// interface PostFormProps {
//   onSubmit: (post: Post) => void;
//   onClose: (post: Post) => void;
// }

export default function PostForm(props: {
  post: Post;
  onSubmit: (post: Post) => void;
  onClose: (post: Post) => void;
}) {
  const [post, setPost] = useState<Post>({ title: "", thought: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    return setPost({ title: e.target.value, thought: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    props.onSubmit(post);
    clearFormValues();
  }

  function clearFormValues() {
    setPost({ title: "", thought: "" });
  }

  return (
    <form className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>Title</h4>
          <input
            type="text"
            name="post"
            placeholder="Enter a title"
            value={post.thought}
            onChange={handleChange}
          />
          <div className="modal-body">
            <h4>Thought</h4>
            <input
              type="text"
              name="post"
              placeholder="Enter a thought"
              value={post.thought}
              onChange={handleChange}
            />
          </div>
          <div className="modal-footer">
            <button onClick={handleSubmit}>Add Post</button>
          </div>
        </div>
      </div>
    </form>
  );
}
