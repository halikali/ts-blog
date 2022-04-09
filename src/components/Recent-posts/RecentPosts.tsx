import Post from "components/Post";
import { useSelector } from "react-redux";
import { IAppState } from "types/generalTypes";
import "./RecentPosts.scss";

const RecentPosts = () => {
  const posts = useSelector((state: IAppState) => state.AllPosts);

  return (
    <div className="recent-posts">
      <h4 className="recent-posts__title">recent posts</h4>

      <div className="row">
        <div className="col-12 col-lg-6">
          <Post type="type-1" post={posts?.data[3]} />
        </div>
        <div className="col-12 col-lg-6">
          <Post type="type-1" post={posts?.data[4]} />
        </div>
        <div className="col-12 col-lg-6">
          <Post type="type-1" post={posts?.data[5]} />
        </div>
        <div className="col-12 col-lg-6">
          <Post type="type-1" post={posts?.data[6]}/>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
