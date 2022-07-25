import * as C from "./style";
import Client01 from "./img/Client1.png";
import Client02 from "./img/Client2.png";
import Client03 from "./img/Client3.png";
import { useMain } from "../../../shared/contexts/mainContext";

export const ClientsContents = () => {
  const { handleRef } = useMain();

  return (
    <C.ClientsContents>
      <div className="clients">
        <div className="clients__contents" data-scroll="bottom" ref={handleRef}>
          <p className="clients__box">
            "I've worked too hard and too long to let anything stand in the way
            of my goals. I will not let my teammates down and I will not let
            myself down."
          </p>
          <div className="clients__arrow"></div>
          <figure>
            <img src={Client01} alt="client-01" />
            <figcaption>
              <h2>John Doe</h2>
              <p>client</p>
            </figcaption>
          </figure>
        </div>
        <div className="clients__contents" data-scroll="bottom" ref={handleRef}>
          <p className="clients__box">
            "In motivating people, you've got to engage their minds and their
            hearts. I motivate people, I hope, by example - and perhaps by
            excitement, by having productive ideas to make others feel
            involved."
          </p>
          <div className="clients__arrow"></div>
          <figure>
            <img src={Client02} alt="client-02" />
            <figcaption>
              <h2>John Doe</h2>
              <p>client</p>
            </figcaption>
          </figure>
        </div>
        <div className="clients__contents" data-scroll="bottom" ref={handleRef}>
          <p className="clients__box">
            "Determine never to be idle. No person will have occasion to
            complain of the want of time who never loses any. It is wonderful
            how much may be done if we are always doing."
          </p>
          <div className="clients__arrow"></div>
          <figure>
            <img src={Client03} alt="client-03" />
            <figcaption>
              <h2>John Doe</h2>
              <p>client</p>
            </figcaption>
          </figure>
        </div>
      </div>

      <p className="clients__testimonial-text">
        "Perfection is Achieved Not When There Is Nothing More to Add, But When
        There Is Nothing Left to Take Away"
      </p>
    </C.ClientsContents>
  );
};
