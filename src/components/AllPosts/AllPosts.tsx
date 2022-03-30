import "./AllPosts.scss";

const AllPosts = () => {
  return (
    <div className="all-posts mt-5">
      {Array.from({ length: 5 }).map((item, i) => (
        <div className="card" key={i}>
          <div className="card__image-wrapper">
            <img
              src="https://image.shutterstock.com/image-photo/homemade-granola-nuts-raisins-kiwi-600w-636196073.jpg"
              alt="post"
              className="card__image"
            />
          </div>
          <div className="card__body">
            <p className="card__category-name">travel</p>
            <h4 className="card__title">Lorem ipsum dolor sit amet.</h4>
            <p className="card__author">
              john Doe <span className="dot">•</span>
              <span className="card__date">20 april 2018</span>
            </p>
            <p className="card__content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, id
              architecto sint quod facere omnis possimus vero fugiat assumenda.
              Sequi nostrum error ipsam architecto itaque vitae tenetur! Quae.
            </p>
          </div>
        </div>
      ))}

      <p className="button button--red">load more</p>
    </div>
  );
};

export default AllPosts;
