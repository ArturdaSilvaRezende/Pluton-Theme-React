import * as C from "./style";
import { Title } from "../../../shared/style/title";
import { PriceContents } from "./priceContents";
import { useMain } from "../../../shared/contexts/mainContext";

export const Price = () => {
  const { handleRef } = useMain();

  return (
    <C.PriceSection id="price">
      <Title
        colorTitle="var(--black-color)"
        paragraphTitle="var(--black-color)"
        lineTitle="1px solid var(--black-color)"
        data-scroll="bottom"
        ref={handleRef}
      >
        <h1>Price</h1>
        <p>
          Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque
          dapibus in purus in dignissim.
        </p>
      </Title>
      <PriceContents />
      <div className="price__contact">
        <p>We Offer Custom Plans. Contact Us For More Info.</p>
        <button type="button">Contact Us</button>
      </div>
    </C.PriceSection>
  );
};
