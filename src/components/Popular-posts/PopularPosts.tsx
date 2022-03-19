import SmallPost from "components/Small-Post";
import "./PopularPosts.scss";

const PopularPosts = () => {
  return (
    <div className="popular-posts">
      <p className="popular-posts__category-name-wrapper">
        <span className="popular-posts__category-name">Popular Posts </span>
      </p>
      <SmallPost />
      <SmallPost />
      <SmallPost />
      <SmallPost />
    </div>
  );
};

export default PopularPosts;
