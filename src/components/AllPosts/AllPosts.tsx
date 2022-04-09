import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { IAppState } from "types/generalTypes";
import "./AllPosts.scss";

const AllPosts = () => {
  const posts = useSelector((state: IAppState) => state.AllPosts);

  return (
    <div className="all-posts mt-5">
      {posts &&
        posts.data.map((item) => (
          <Link to={"/details"} key={item.id}>
            <div className="card">
              <div className="card__image-wrapper">
                <img
                  src={item.contentImageURL}
                  alt="post"
                  className="card__image"
                />
              </div>
              <div className="card__body">
                <p className="card__category-name">{item.category}</p>
                <h4 className="card__title">{item.title}</h4>
                <p className="card__author">
                  {item.author}
                  <span className="dot">•</span>
                  <span className="card__date">20 april 2018</span>
                </p>
                <p className="card__content">{item.content}</p>
              </div>
            </div>
          </Link>
        ))}

      <p className="button button--red">load more</p>
    </div>
  );
};

export default AllPosts;
