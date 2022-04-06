import Ads from "components/Ads";
import CategoryList from "components/Category-List";
import PopularPosts from "components/Popular-posts";
import SocialMedia from "components/SocialMedia";
import React, { useEffect, useState } from "react";
import "./DetailPage.scss";

const DetailPage = () => {
  const ımage = "https://preview.colorlib.com/theme/callie/img/media-2.jpg";
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (e: any) => {
      setScroll(e.currentTarget.scrollY);
    });
  }, [scroll]);

  return (
    <div className="row details">
      <div className="col-12 mb-5">
        <div
          className="details__header"
          style={{
            backgroundImage: `url(${ımage})`,
            backgroundPosition: `50% -${scroll}px`,
            transition: "all .5s ease",
          }}
        >
          <div className="details__text-wrapper">
            <p className="details__category-name">lifestyle</p>
            <h1 className="details__title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              itaque, sint ab eligendi neque optio
            </h1>
            <p className="details__author">
              John doe <span className="dot"></span>
              <span className="details__created-date">20 april 2018</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-8">
        <div className="details__body">
          <h2>article title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est omnis
            fuga, similique nulla ullam quam tempore reprehenderit cumque unde
            quas assumenda, libero soluta praesentium enim aliquam fugit optio
            dolor veniam ab sapiente necessitatibus aliquid totam! Odio quasi,
            cupiditate tempore officia, perspiciatis modi pariatur hic corporis
            quibusdam unde veniam beatae optio neque minus consequatur ratione
            impedit aperiam blanditiis? Veniam, quisquam eaque assumenda
            mollitia quod nulla ut blanditiis sit ipsa expedita laborum et
            dicta, error dignissimos ipsam temporibus vel debitis, illum
            deleniti quas sapiente alias consequuntur doloribus? Expedita,
            architecto repellendus exercitationem quibusdam sequi similique esse
            perferendis provident optio aperiam vero adipisci ducimus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est omnis
            fuga, similique nulla ullam quam tempore reprehenderit cumque unde
            quas assumenda, libero soluta praesentium enim aliquam fugit optio
            dolor veniam ab sapiente necessitatibus aliquid totam! Odio quasi,
            cupiditate tempore officia, perspiciatis modi pariatur hic corporis
            quibusdam unde veniam beatae optio neque minus consequatur ratione
            impedit aperiam blanditiis? Veniam, quisquam eaque assumenda
            mollitia quod nulla ut blanditiis sit ipsa expedita laborum et
            dicta, error dignissimos ipsam temporibus vel debitis, illum
            deleniti quas sapiente alias consequuntur doloribus? Expedita,
            architecto repellendus exercitationem quibusdam sequi similique esse
            perferendis provident optio aperiam vero adipisci ducimus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est omnis
            fuga, similique nulla ullam quam tempore reprehenderit cumque unde
            quas assumenda, libero soluta praesentium enim aliquam fugit optio
            dolor veniam ab sapiente necessitatibus aliquid totam! Odio quasi,
            cupiditate tempore officia, perspiciatis modi pariatur hic corporis
            quibusdam unde veniam beatae optio neque minus consequatur ratione
            impedit aperiam blanditiis? Veniam, quisquam eaque assumenda
            mollitia quod nulla ut blanditiis sit ipsa expedita laborum et
            dicta, error dignissimos ipsam temporibus vel debitis, illum
            deleniti quas sapiente alias consequuntur doloribus? Expedita,
            architecto repellendus exercitationem quibusdam sequi similique esse
            perferendis provident optio aperiam vero adipisci ducimus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est omnis
            fuga, similique nulla ullam quam tempore reprehenderit cumque unde
            quas assumenda, libero soluta praesentium enim aliquam fugit optio
            dolor veniam ab sapiente necessitatibus aliquid totam! Odio quasi,
            cupiditate tempore officia, perspiciatis modi pariatur hic corporis
            quibusdam unde veniam beatae optio neque minus consequatur ratione
            impedit aperiam blanditiis? Veniam, quisquam eaque assumenda
            mollitia quod nulla ut blanditiis sit ipsa expedita laborum et
            dicta, error dignissimos ipsam temporibus vel debitis, illum
            deleniti quas sapiente alias consequuntur doloribus? Expedita,
            architecto repellendus exercitationem quibusdam sequi similique esse
            perferendis provident optio aperiam vero adipisci ducimus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est omnis
            fuga, similique nulla ullam quam tempore reprehenderit cumque unde
            quas assumenda, libero soluta praesentium enim aliquam fugit optio
            dolor veniam ab sapiente necessitatibus aliquid totam! Odio quasi,
            cupiditate tempore officia, perspiciatis modi pariatur hic corporis
            quibusdam unde veniam beatae optio neque minus consequatur ratione
            impedit aperiam blanditiis? Veniam, quisquam eaque assumenda
            mollitia quod nulla ut blanditiis sit ipsa expedita laborum et
            dicta, error dignissimos ipsam temporibus vel debitis, illum
            deleniti quas sapiente alias consequuntur doloribus? Expedita,
            architecto repellendus exercitationem quibusdam sequi similique esse
            perferendis provident optio aperiam vero adipisci ducimus?
          </p>

          <img
            className="details__image"
            src="https://preview.colorlib.com/theme/callie/img/media-2.jpg"
            alt=""
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
