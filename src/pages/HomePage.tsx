import CategoryList from "components/Category-List";
import Ad from "components/Ads";
import CategoryPost from "components/Category-post";
import LandingCards from "components/Landing-cards";
import PopularPosts from "components/Popular-posts";
import RecentPosts from "components/Recent-posts";
import SocialMedia from "components/SocialMedia";

const HomePage = () => {
  return (
    <>
      <LandingCards />
      <div className="row">
        <div className="col-12 col-lg-8">
          <RecentPosts />
          <CategoryPost categoryName="lifestyle" />
          <CategoryPost categoryName="FASHION & TRAVEL" />
          <CategoryPost categoryName="TECHNOLOGY & HEALTH" />
        </div>
        <div className="d-none d-lg-block col-12 col-md-4">
          <Ad type={"box"} />
          <CategoryList />
          <SocialMedia />
          <PopularPosts />
        </div>
      </div>
    </>
  );
};

export default HomePage;
