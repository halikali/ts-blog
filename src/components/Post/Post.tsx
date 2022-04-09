import React from "react";
import { Link } from "react-router-dom";
import { IPost } from "types/PostTypes";

import "./Post.scss";

interface IPostProps {
  type?: "type-1" | "type-2";
  post?: IPost;
}

const Post: React.FC<IPostProps> = (props) => {
  const { type, post } = props;

  return (
    <Link to={`/details/${post?.id}`}>
      <div className={`post ${type || ""}`}>
        <div className="post__image-wrapper">
          <img src={post?.contentImageURL} alt="post" className="post__image" />
        </div>
        <div className="post__info">
          <p className="post__category">{post?.category}</p>
          <p className="post__text-content">{post?.content}</p>
          <p className="post__author">
            {post?.author} <span className="dot">•</span>
            <span className="post__date">20 april 2018</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
