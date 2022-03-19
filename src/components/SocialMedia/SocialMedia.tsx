import {
  faFacebookF,
  faGooglePlus,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="mt-5">
      <p className="social-media__text-wrapper">
        <span className="social-media__text">SOCIAL MEDIA</span>
      </p>

      <div className="social-media__wrapper">
        <div className="social-media social-media--facebook">
          <FontAwesomeIcon className="social-media__logo" icon={faFacebookF} />
          <p>21.2K</p>
          <p>Followers</p>
        </div>
        <div className="social-media social-media--twitter">
          <FontAwesomeIcon className="social-media__logo" icon={faTwitter} />
          <p>10.2K</p>
          <p>Followers</p>
        </div>
        <div className="social-media social-media--google-plus">
          <FontAwesomeIcon
            className="social-media__logo"
            icon={faGooglePlusG}
          />
          <p>5K</p>
          <p>Followers</p>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
