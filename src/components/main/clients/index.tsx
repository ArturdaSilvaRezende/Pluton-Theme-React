import * as C from "./style";
import { Title } from "../../../shared/style/title";
import { Triangle } from "../../../shared/style/triangle";
import { ClientsContents } from "./clientContents";

import { useMain } from "../../../shared/contexts/mainContext";

export const Clients = () => {
  const { handleRef } = useMain();

  return (
    <C.ClientsSection id="clients">
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
        <h1>What Client Say?</h1>
        <p>
          Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque
          dapibus in purus in dignissim.
        </p>
      </Title>
      <ClientsContents />
    </C.ClientsSection>
  );
};
