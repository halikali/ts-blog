import { Link } from "react-router-dom";
import "./SmallCard.scss";

const SmallPost = () => {
  return (
    <Link to={"/details"}>
      <div className="small-card">
        <div className="small-card__image-wrapper">
          <img
            src="https://image.shutterstock.com/image-photo/underpass-sign-sky-background-600w-2137028029.jpg"
            alt=""
            className="small-card__image"
          />
        </div>
        <div className="small-card__content">
          <p className="small-card__category-name">LIFESTYLE</p>
          <h3 className="small-card__title">
            Lorem ipsum dolor sit amet consectetur adipisicing lorem ipsum Lorem
            ipsum dolor sit amet consectetur adipisicing.
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default SmallPost;
