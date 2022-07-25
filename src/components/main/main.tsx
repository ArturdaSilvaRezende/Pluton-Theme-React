import { MutableRefObject, useCallback, useEffect } from "react";

import { OurServices } from "./ourServices";
import { Portfolio } from "./portfolio";
import { About } from "./about";
import { Clients } from "./clients";
import { ClientsCarousel } from "./clientsCarousel";
import { Price } from "./price";
import { Newsletter } from "./newsletter";
import { ContactUs } from "./contactus";

import { useMain } from "../../shared/contexts/mainContext";
import "./animationScroll.css";

type El = HTMLDivElement;

export const Main = () => {
  const { scrollRef } = useMain();

  const handleScroll = useCallback(() => {
    if (scrollRef !== null) {
      (scrollRef as MutableRefObject<HTMLDivElement[]>).current.forEach(
        function (e: El) {
          if (window.pageYOffset + (window.innerHeight * 3) / 4 > e.offsetTop) {
            e.classList.add("data-scroll-show-items");
          } else {
            e.classList.remove("data-scroll-show-items");
          }
        }
      );
    }
  }, [scrollRef]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
    });
  }, [handleScroll]);

  return (
    <main>
      <OurServices />
      <Portfolio />
      <About />
      <Clients />
      <ClientsCarousel />
      <Price />
      <Newsletter />
      <ContactUs />
    </main>
  );
};
