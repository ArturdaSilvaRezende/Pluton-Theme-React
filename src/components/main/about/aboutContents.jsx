import * as C from "./style";
import { useMain } from "../../../shared/contexts/mainContext";

export const AboutUs = () => {
  const { handleRef } = useMain();

  return (
    <C.AboutUs>
      <div className="about__title" data-scroll="bottom" ref={handleRef}>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
          diamnonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
          erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
          tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
          velit esse molestie consequat, vel illum dolore eu feugiat nulla
          facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
          praesent luptatum zzril delenit augue duis dolore te feugait.
        </p>
      </div>

      <div className="about__description">
        <h2>Skills</h2>

        <div className="about__contents">
          <div className="about__skills" data-scroll="bottom" ref={handleRef}>
            <p>
              <span className="about__bar"></span>
              <span className="about__text">Graphic Design</span>
            </p>
            <p>
              <span className="about__bar"></span>
              <span className="about__text">Html / Css</span>
            </p>
            <p>
              <span className="about__bar"></span>
              <span className="about__text">JQuery</span>
            </p>
            <p>
              <span className="about__bar"></span>
              <span className="about__text">Wordpress</span>
            </p>
          </div>
          <div className="about__box" data-scroll="bottom" ref={handleRef}>
            <h3>We're Hiring</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, ullamcorper suscipit
              lobortis nisl ut aliquip consequat. I learned that we can do
              anything, but we can't do everything...
            </p>
            <button type="button">Join Us</button>
          </div>
        </div>
      </div>
    </C.AboutUs>
  );
};
