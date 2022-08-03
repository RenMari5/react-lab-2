import { useState } from "react";
import { Post } from "../App";

// App

export default function SocialPost({}) {
  const [thought, setThought] = useState(false);
  const [postList, setPostList] = useState<Post[]>([]);

  function handleOpenThought(e: React.ChangeEvent<HTMLInputElement>) {
    setThought;
  }

  function handleSubmit(post: Post) {
    setPostList([post, ...postList]);
  }

  function deletePost(index: number) {
    return setPostList((prev) => {
      const newList = prev.slice(0);
      newList.splice(index, 1);
      return newList;
    });
  }

  return (
    <div className="my-thoughts">
      <h1>My Thoughts</h1>

      <button>New Thought</button>
      <PostInList onDelete={deletePost} />
    </div>
  );
}
