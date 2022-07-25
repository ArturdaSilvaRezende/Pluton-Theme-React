import { useState } from "react";
import * as C from "./style";
import { NavPill } from "./portfolioNavbar";
import { CardsContainer } from "./portfolioCards";

export const PortfolioContents = () => {
  const [filter, setFilter] = useState("all");

  return (
    <C.PortfolioContents>
      <NavPill filter={filter} setFilter={setFilter} />

      <CardsContainer filtered={filter} />
    </C.PortfolioContents>
  );
};
