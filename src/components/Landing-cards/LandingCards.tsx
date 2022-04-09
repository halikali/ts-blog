import Post from "components/Post";
import { useSelector } from "react-redux";
import { IAppState } from "types/generalTypes";
import "./LandingCards.scss";

const LandingCards = () => {
  const posts = useSelector((state: IAppState) => state.AllPosts);

  return (
    <div className="landing-cards">
      <div className="row">
        <div className="col-12 col-lg-8 first">
          <Post post={posts?.data[0]} />
        </div>
        <div className="col-12 col-lg-4 second">
          <Post post={posts?.data[1]} />
          <Post post={posts?.data[2]} />
        </div>
      </div>
    </div>
  );
};

export default LandingCards;
