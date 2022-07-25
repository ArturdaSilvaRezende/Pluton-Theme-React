import * as C from "./style";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

export const Footer = () => {
  const getYear = new Date();

  return (
    <C.Footer>
      <div className="container">
        <div className="footer__address">
          <h2>Address / Contact Us</h2>
          <address>
            <p>
              Original Template{" "}
              <a
                href="https://www.graphberry.com/products/preview/pluton-single-page-bootstrap-html-template"
                target="_blank"
                rel="noreferrer"
              >
                GraphBerry
              </a>
            </p>
            <p>123 Fifth Avenue, 12th,Belgrade,SRB 11000</p>
            <p>ourstudio@somemail.com</p>
            <p>+11 234 567 890</p>
            <p>+11 286 543 850</p>
          </address>
        </div>
        <div className="footer__social">
          <h2>We Are Social</h2>
          <ul className="footer__social-item">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaPinterestP />
            </li>
            <li>
              <FaDribbble />
            </li>
            <li>
              <FaGooglePlusG />
            </li>
          </ul>
        </div>
        <form className="footer__newsletter">
          <h2>Newsletter</h2>
          <div>
            <input
              type="email"
              pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
              required
              placeholder="Your Email"
            />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>
      <hr />
      <div className="copyright">
        <p>
          This project was based on one of the GraphBerry templates, which can
          be accessed by clicking on the link.
        </p>
        <p>
          © {getYear.getFullYear()} Theme by{" "}
          <a
            href="https://www.graphberry.com/products/preview/pluton-single-page-bootstrap-html-template"
            target="_blank"
            rel="noreferrer"
          >
            GraphBerry
          </a>
        </p>
      </div>
    </C.Footer>
  );
};
