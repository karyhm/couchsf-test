"use client";
import { useEffect, useState } from "react";

import getPosts from "@/app/lib/getPosts";
import Loader from "@/app/components/Loader/Loader";
import PostComponent from "./Post";
import { Post } from "@/app/types/index";

interface PostProps {
  users: string[];
}

const Posts = ({ users }: PostProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    if (users && users.length > 0) {
      const data = await Promise.all(
        users.map(async (user) => await getPosts(user))
      );

      const results = data.flat();

      setPosts(results);
    }
  };

  return (
    <div id="posts" className="section">
      <h1>Posts</h1>

      <div className="container flex-col">
        {posts && posts.length > 0 ? (
          <ul>
            {posts.map((post, id) => (
              <PostComponent key={"postid-" + id} {...post} />
            ))}
          </ul>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Posts;
