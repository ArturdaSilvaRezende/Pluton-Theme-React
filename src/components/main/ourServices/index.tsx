import * as C from "./style";
import { Title } from "../../../shared/style/title";
import { ServicesCard } from "./ourServicesList";
import { useMain } from "../../../shared/contexts/mainContext";

export const OurServices = () => {
  const { handleRef } = useMain();
  return (
    <C.OurServicesSection id="services">
      <Title
        colorTitle="var(--white-color)"
        paragraphTitle="var(--yellow-color)"
        lineTitle="1px solid var(--white-color)"
        data-scroll="bottom"
        ref={handleRef}
      >
        <h1>What We Do?</h1>
        <p>
          Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque
          dapibus in purus in dignissim.
        </p>
      </Title>

      <C.CardContainer>
        {ServicesCard.map((item) => (
          <C.Services key={item.id} data-scroll="bottom" ref={handleRef}>
            <img src={item.img} alt={item.title} />

            <figcaption>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </figcaption>
          </C.Services>
        ))}
      </C.CardContainer>
    </C.OurServicesSection>
  );
};
