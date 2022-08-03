import React, { useState } from "react";
import { Post } from "../App";

// TodoForm

interface PostFormProps {
  onSubmit: (post: Post) => void;
  onClose: (post: Post) => void;
}

export default function PostForm({ onSubmit }: PostFormProps) {
  const [post, setPost] = useState<Post>({ title: "", thought: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    return setPost({ title: e.target.value, thought: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(post);
    clearFormValues();
  }

  function clearFormValues() {
    setPost({ title: "", thought: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="post"
        placeholder="Enter a thought"
        value={post.thought}
        onChange={handleChange}
      />
      <button type="submit">Post</button>
    </form>
  );
}
