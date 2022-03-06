import React from "react";

import "./Post.scss";

interface IPostProps {
  type?: string;
}

const Post: React.FC<IPostProps> = (props) => {
  const { type } = props;

  return (
    <div className={`post ${type}`}>
      <img
        src="https://image.shutterstock.com/image-photo/homemade-granola-nuts-raisins-kiwi-600w-636196073.jpg"
        alt="post"
        className="post__image"
      />
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
  );
};

export default Post;
