import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createPortal } from "react-dom";

import "./MobileNavbar.scss";

const MobileNavbar = () => {
  const portalContainer = document.getElementById("mobile-navbar-root");

  const onClickHandler = () => {
    document.getElementsByClassName("navbar")[0].classList.toggle("opened");

    !document
      .getElementsByClassName("navbar")[0]
      .classList.contains("opened") &&
      document.getElementById("root")?.classList.remove("modal-blur");
  };

  return (
    portalContainer &&
    createPortal(
      <div className={`navbar `}>
        <div className="navbar__icon-wrapper">
          <FontAwesomeIcon
            className="navbar__close-icon"
            icon={faClose}
            onClick={() => {
              onClickHandler();
            }}
          />
        </div>
        <ul className="navbar__list-wrapper">
          <li className="navbar__list-item">Home</li>
          <li className="navbar__list-item">Categories</li>
          <li className="navbar__list-item">About Us</li>
          <li className="navbar__list-item">Contacts</li>
          <li className="navbar__list-item">Advertise</li>
        </ul>
      </div>,
      portalContainer
    )
  );
};

export default MobileNavbar;
