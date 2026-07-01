import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router";

function PostCard({ post }) {
  // console.log("this is a featured image id", post.featuredImage);
  // console.log("this is id: ", post.$id);
  const filePreview = appwriteService.getFilePreview(post.featuredImage);
  // console.log("file preview: ", filePreview);
  return (
    <Link to={`/post/${post.$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img src={filePreview} alt={post.title} className="rounded-xl" />
        </div>
        <h2 className="text-xl font-bold">{post.title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
