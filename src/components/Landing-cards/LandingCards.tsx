import Post from "components/Post";
import "./LandingCards.scss";

const LandingCards = () => {
  return (
    <div className="landing-cards">
      <div className="row">
        <div className="col-12 col-lg-8 first">
          <Post />
        </div>
        <div className="col-12 col-lg-4 second">
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default LandingCards;
