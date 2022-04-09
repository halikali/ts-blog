import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Ads from "components/Ads";
import CategoryList from "components/Category-List";
import PopularPosts from "components/Popular-posts";
import SocialMedia from "components/SocialMedia";
import { getPostDetail, clearPostDetails } from "store/actions/postActions";
import "./DetailPage.scss";
import { IAppState } from "types/generalTypes";

const DetailPage = () => {
  const [scroll, setScroll] = useState(0);
  const dispatch = useDispatch();
  let { ID } = useParams();

  const detail = useSelector((state: IAppState) => state.Detail?.data);

  useEffect(() => {
    window.addEventListener("scroll", (e: any) => {
      setScroll(e.currentTarget.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [scroll]);

  useEffect(() => {
    dispatch(getPostDetail(ID));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    return () => {
      dispatch(clearPostDetails());
    };
  }, [ID]);
  return (
    <div className="row details">
      <div className="col-12 mb-5">
        <div
          className="details__header"
          style={{
            backgroundImage: `url(${detail?.coverImageURL})`,
            backgroundPosition: `50% -${scroll}px`,
            transition: "all .3s ease",
          }}
        >
          <div className="details__text-wrapper">
            <p className="details__category-name">{detail?.category}</p>
            <h1 className="details__title">{detail?.title}</h1>
            <p className="details__author">
              {detail?.author} <span className="dot"></span>
              <span className="details__created-date">20 april 2018</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-8">
        <div className="details__body">
          <h2>{detail?.title}</h2>
          <p>{detail?.content}</p>

          <img
            className="details__image"
            src={detail?.contentImageURL}
            alt={detail?.title}
          />
        </div>
      </div>
      <div className="col-12 col-lg-4">
        <Ads type={"box"} />
        <SocialMedia />
        <CategoryList />
        <PopularPosts />
      </div>
    </div>
  );
};

export default DetailPage;
