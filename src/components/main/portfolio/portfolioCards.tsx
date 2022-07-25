import { useEffect, useState } from "react";
import * as C from "./style";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { PortfolioCard } from "./portfolioList";
import { Portfolio } from "../../../types/typePortfolio";

import "./animation.css";

type itemFilter = {
  filtered: string;
};

export const CardsContainer = (props: itemFilter) => {
  const [category, setCategory] = useState<Portfolio[]>([]);

  //handle - show
  useEffect(() => {
    category.map((item) => {
      const buttonToggleShow = document.getElementById(
        `buttonToggleShow${item.id}`
      );
      const figcaptionDesc = document.getElementById(
        `figcaptionDesc${item.id}`
      );

      if (buttonToggleShow !== null && figcaptionDesc !== null) {
        buttonToggleShow.addEventListener("click", (e) => {
          if (e.target) {
            figcaptionDesc.classList.remove("fadeOut");
            figcaptionDesc.classList.add("fadeIn");
            figcaptionDesc.style.display = "block";
          }
        });
      }
      return "";
    });
  }, [category]);

  //handle - close
  useEffect(() => {
    category.map((item) => {
      const buttonToggleShow = document.getElementById(
        `buttonToggleHide${item.id}`
      );
      const figcaptionDesc = document.getElementById(
        `figcaptionDesc${item.id}`
      );

      if (buttonToggleShow !== null && figcaptionDesc !== null) {
        buttonToggleShow.addEventListener("click", (e) => {
          if (e.target) {
            figcaptionDesc.classList.remove("fadeIn");
            figcaptionDesc.classList.add("fadeOut");

            setTimeout(() => {
              figcaptionDesc.style.display = "none";
            }, 1100);
          }
        });
      }

      return "";
    });
  }, [category]);

  useEffect(() => {
    setCategory(PortfolioCard);
  }, []);

  useEffect(() => {
    const filtered = PortfolioCard.map((p) => ({
      ...p,
      filtered: p.category.includes(props.filtered),
    }));

    setCategory(filtered);
  }, [props.filtered]);

  return (
    <C.CardsContainer>
      {category.map((item, index) =>
        item.filtered === true ? (
          <C.Figure key={item.id} className="zoomIn">
            <img src={item.img} alt={item.client} />

            <figcaption id={`figcaptionDesc${item.id}`}>
              <h2>{item.title}</h2>

              <div className="description">
                <div>
                  <p>Client</p>
                  <p>{item.client}</p>
                </div>
                <div>
                  <p>Skills</p>
                  <p>{item.skills}</p>
                </div>
                <div>
                  <p>Link</p>
                  <p>{item.link}</p>
                </div>
              </div>

              <p className="about">{item.desc}</p>
            </figcaption>

            <C.ButtonsControl>
              <button type="button" id={`buttonToggleShow${item.id}`}>
                <BsFillEyeFill />
              </button>
              <button type="button" id={`buttonToggleHide${item.id}`}>
                <BsFillEyeSlashFill />
              </button>
            </C.ButtonsControl>
          </C.Figure>
        ) : null
      )}
    </C.CardsContainer>
  );
};
