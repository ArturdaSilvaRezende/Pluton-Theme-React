import * as C from "./style";
import { Title } from "../../../shared/style/title";
import { Triangle } from "../../../shared/style/triangle";
import { PortfolioContents } from "./portfolioContents";
import { useMain } from "../../../shared/contexts/mainContext";

export type filter = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const Portfolio = () => {
  const { handleRef } = useMain();
  return (
    <C.PortfolioSection id="portfolio">
      <Triangle
        borderColor="var(--black-color)"
        data-scroll="bottom"
        ref={handleRef}
      />
      <Title
        colorTitle="var(--black-color)"
        paragraphTitle="var(--black-color)"
        lineTitle="1px solid var(--black-color)"
        data-scroll="bottom"
        ref={handleRef}
      >
        <h1>Have You Seen our Works?</h1>
        <p>
          Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque
          dapibus in purus in dignissim.
        </p>
      </Title>

      <PortfolioContents />
    </C.PortfolioSection>
  );
};
