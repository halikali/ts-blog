import Post from "components/Post";
import "./RecentPosts.scss";

const RecentPosts = () => {
  return (
    <div className="recent-posts">
      <h4 className="recent-posts__title">recent posts</h4>

      <div className="row">
        <div className="col-12 col-lg-6">
          <Post type="type-1" />
        </div>
        <div className="col-12 col-lg-6">
          <Post type="type-1" />
        </div>
        <div className="col-12 col-lg-6">
          <Post type="type-1" />
        </div>
        <div className="col-12 col-lg-6">
          <Post type="type-1" />
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
