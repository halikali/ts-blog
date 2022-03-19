import CategoryList from "components/Category-List";
import Ad from "components/Ads";
import CategoryPost from "components/Category-post";
import LandingCards from "components/Landing-cards";
import PopularPosts from "components/Popular-posts";
import RecentPosts from "components/Recent-posts";
import SocialMedia from "components/SocialMedia";
import MultiNews from "components/Multi-news";
import SingleCategoryPost from "components/Single-category-post";
import Post from "components/Post";

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
      <div className="row">
        <div className="col-12 col-lg-4">
          <SingleCategoryPost categoryName="lifestyle">
            <Post type="type-1" />
          </SingleCategoryPost>
        </div>
        <div className="col-12 col-lg-4">
          <SingleCategoryPost categoryName="fashion">
            <Post type="type-1" />
          </SingleCategoryPost>
        </div>
        <div className="col-12 col-lg-4">
          <SingleCategoryPost categoryName="health">
            <Post type="type-1" />
          </SingleCategoryPost>
        </div>
      </div>
      <div className="row">
        <MultiNews />
      </div>
    </>
  );
};

export default HomePage;
