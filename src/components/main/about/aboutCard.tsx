import * as C from "./style";
import Person01 from "./img/Team1.png";
import Person02 from "./img/Team2.png";
import Person03 from "./img/Team3.png";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { useMain } from "../../../shared/contexts/mainContext";

export const CardPerson = () => {
  const { handleRef } = useMain();

  return (
    <C.CardPerson>
      <figure data-scroll="bottom" ref={handleRef}>
        <img src={Person01} alt="about-person-01" />

        <figcaption>
          <h2>John Doe</h2>
          <div>
            <button type="button">
              <FaFacebookF />
            </button>
            <button type="button">
              <RiTwitterFill />
            </button>
            <button type="button">
              <FaLinkedinIn />
            </button>
          </div>
        </figcaption>
      </figure>

      <figure data-scroll="bottom" ref={handleRef}>
        <img src={Person02} alt="about-person-02" />

        <figcaption>
          <h2>John Doe</h2>
          <div>
            <button type="button">
              <FaFacebookF />
            </button>
            <button type="button">
              <RiTwitterFill />
            </button>
            <button type="button">
              <FaLinkedinIn />
            </button>
          </div>
        </figcaption>
      </figure>

      <figure data-scroll="bottom" ref={handleRef}>
        <img src={Person03} alt="about-person-03" />

        <figcaption>
          <h2>John Doe</h2>
          <div>
            <button type="button">
              <FaFacebookF />
            </button>
            <button type="button">
              <RiTwitterFill />
            </button>
            <button type="button">
              <FaLinkedinIn />
            </button>
          </div>
        </figcaption>
      </figure>
    </C.CardPerson>
  );
};
