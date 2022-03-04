import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="social-media__icon-wrapper">
          <FontAwesomeIcon icon={faTwitter} className={"social-media__icon"} />
          <FontAwesomeIcon
            icon={faFacebookF}
            className={"social-media__icon"}
          />
          <FontAwesomeIcon
            icon={faGooglePlusG}
            className={"social-media__icon"}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className={"social-media__icon"}
          />
        </div>

        <p className="header__logo">Callie</p>

        <div className={"header__menu-icons"}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={"header__menu-icon"}
          />
          <FontAwesomeIcon icon={faBars} className={"header__menu-icon"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
