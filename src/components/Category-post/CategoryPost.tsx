import React from "react";

import Post from "components/Post";
import "./CategoryPost.scss";

interface ICategoryPostProps {
  categoryName: string;
}
const CategoryPost: React.FC<ICategoryPostProps> = (props) => {
  const { categoryName } = props;

  return (
    <div className="category-post">
      <p className="category-post__post-name-wrapper">
        <span className="category-post__post-name">{categoryName} </span>
      </p>
      <div className="row">
        <div className="col-12 col-lg-4">
          <Post type="type-2" />
        </div>
        <div className="col-12 col-lg-4">
          <Post type="type-2" />
        </div>
        <div className="col-12 col-lg-4">
          <Post type="type-2" />
        </div>
      </div>
    </div>
  );
};

export default CategoryPost;
