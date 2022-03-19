import SmallPost from "components/Small-Post";
import "./PopularPosts.scss";

const PopularPosts = () => {
  return (
    <div className="popular-posts mt-5">
      <p className="popular-posts__name-wrapper">
        <span className="popular-posts__name">Popular Posts </span>
      </p>
      <SmallPost />
      <SmallPost />
      <SmallPost />
      <SmallPost />
    </div>
  );
};

export default PopularPosts;
