import "./SmallCard.scss";

const SmallPost = () => {
  return (
    <div className="small-card">
      <img
        src="https://image.shutterstock.com/image-photo/underpass-sign-sky-background-600w-2137028029.jpg"
        alt=""
        className="small-card__image"
      />
      <div className="small-card__content">
        <p className="small-card__category-name">LIFESTYLE</p>
        <h3 className="small-card__title">
          Lorem ipsum dolor sit amet consectetur adipisicing lorem ipsum Lorem
          ipsum dolor sit amet consectetur adipisicing.
        </h3>
      </div>
    </div>
  );
};

export default SmallPost;
