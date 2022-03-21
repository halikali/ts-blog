import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="container footer">
      <div className="footer__body">
        <p>Copyright &copy; {new Date().getFullYear()} All rights reserved</p>
        <nav>
          <ul className="footer__list-wrapper">
            <li className="footer__list-item">
              <a href="">Home</a>{" "}
            </li>
            <li className="footer__list-item">
              <a href="">About Us</a>{" "}
            </li>
            <li className="footer__list-item">
              <a href="">Contacts</a>{" "}
            </li>
            <li className="footer__list-item">
              <a href="">Advertise</a>{" "}
            </li>
            <li className="footer__list-item">
              <a href="">Privacy</a>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
