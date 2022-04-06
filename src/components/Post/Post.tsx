import React from "react";
import { Link } from "react-router-dom";

import "./Post.scss";

interface IPostProps {
  type?: "type-1" | "type-2";
}

const Post: React.FC<IPostProps> = (props) => {
  const { type } = props;

  return (
    <Link to={"/details"}>
      <div className={`post ${type || ""}`}>
        <div className="post__image-wrapper">
          <img
            src="https://image.shutterstock.com/image-photo/decorative-indoor-lightning-retro-bulbs-600w-2134575209.jpg"
            alt="post"
            className="post__image"
          />
        </div>
        <div className="post__info">
          <p className="post__category">lifestyle</p>
          <p className="post__text-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="post__author">
            john Doe <span className="dot">•</span>
            <span className="post__date">20 april 2018</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Post;
