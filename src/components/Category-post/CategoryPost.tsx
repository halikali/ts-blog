import React, { useEffect } from "react";

import Post from "components/Post";
import "./CategoryPost.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPostByCategory } from "store/actions/postActions";
import { IAppState } from "types/generalTypes";

interface ICategoryPostProps {
  categoryName: string;
}
const CategoryPost: React.FC<ICategoryPostProps> = (props) => {
  const { categoryName } = props;
  const dispatch = useDispatch();

  const categoryPosts = useSelector(
    (state: IAppState) => state.CategoryPost?.data
  );

  const filteredPosts =
    categoryPosts &&
    Array.from(categoryPosts).filter(
      (item) => item.category === categoryName.toLowerCase()
    );

  useEffect(() => {
    dispatch(getPostByCategory(categoryName.toLowerCase()));

    return () => {
      dispatch({ type: "RESET_POSTS" });
    };
  }, []);

  return (
    <div className="category-post">
      <p className="category-post__name-wrapper">
        <span className="category-post__name">{categoryName} </span>
      </p>

      {filteredPosts && (
        <div className="row">
          <div className="col-12 col-lg-4">
            <Post type="type-2" post={filteredPosts && filteredPosts[0]} />
          </div>
          <div className="col-12 col-lg-4">
            <Post type="type-2" post={filteredPosts && filteredPosts[1]} />
          </div>
          <div className="col-12 col-lg-4">
            <Post type="type-2" post={filteredPosts && filteredPosts[2]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPost;
