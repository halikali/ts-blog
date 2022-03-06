import LandingCards from "components/Landing-cards";
import RecentPosts from "components/Recent-posts";

const HomePage = () => {
  return (
    <>
      <LandingCards />
      <div className="row">
        <div className="col-12 col-lg-8">
          <RecentPosts />
        </div>
        <div className="d-none d-lg-block col-12 col-md-4"></div>
      </div>
    </>
  );
};

export default HomePage;
