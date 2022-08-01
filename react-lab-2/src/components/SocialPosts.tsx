import { useState } from "react";
import { Post } from "../App";

// App

export default function SocialPost({}) {
  const [thought, setThought] = useState(false);
  const [postList, setPostList] = useState<Post[]>([]);

  function handleOpenThought(e: React.ChangeEvent<HTMLInputElement>) {
    setThought;
  }

  function handlePostThought(post: Post) {
    setPostList([post, ...postList]);
  }
}
