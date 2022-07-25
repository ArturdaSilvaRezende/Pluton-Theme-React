import { MutableRefObject } from "react";
import * as C from "./style";
import { Title } from "../../../shared/style/title";
import { Triangle } from "../../../shared/style/triangle";
import { CardPerson } from "./aboutCard";
import { AboutUs } from "./aboutContents";
import { Hosting } from "./aboutHosting";

import { useMain } from "../../../shared/contexts/mainContext";

export const About = () => {
  const { handleRef } = useMain();

  return (
    <C.AboutSection id="about">
      <Triangle
        borderColor="var(--yellow-color)"
        data-scroll="bottom"
        ref={handleRef}
      />
      <Title
        colorTitle="var(--white-color)"
        paragraphTitle="var(--yellow-color)"
        lineTitle="1px solid var(--white-color)"
        data-scroll="bottom"
        ref={handleRef}
      >
        <h1>Who We Are?</h1>
        <p>
          Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque
          dapibus in purus in dignissim.
        </p>
      </Title>
      <CardPerson />
      <AboutUs />
      <Hosting />
    </C.AboutSection>
  );
};
