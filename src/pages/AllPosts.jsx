import React, { use, useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useDispatch, useSelector } from "react-redux";

function AllPosts() {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   appwriteService
  //     .getPosts() // error could be here because passing a []
  //     .then((posts) => {
  //       if (posts) {
  //         setPosts(posts.rows);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("error fetching post", error);
  //     });
  // }, []);

  const posts = useSelector((state) => state.posts.allPosts);
  // console.log("from AllPosts.jsx", posts);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            return (
              <div className="p-2 w-1/4" key={post.$id}>
                <PostCard post={post} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
