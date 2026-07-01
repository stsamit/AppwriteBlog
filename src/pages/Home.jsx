import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setPostsToStore } from "../store/postSlice";
function Home() {
  const posts = useSelector((state) => state.posts.allPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0)
      appwriteService
        .getPosts()
        .then((post) => {
          if (post) {
            dispatch(setPostsToStore(post.rows));
          }
        })
        .catch((error) => {
          console.log("appwrite error : getPosts :: ", error);
          dispatch(setPostsToStore([]));
        });
  }, []);
  // get posts from the store

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover: text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
