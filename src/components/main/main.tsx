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
          if (window.pageYOffset > e.offsetTop - 510) {
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

    if ((scrollRef as MutableRefObject<HTMLDivElement[]>).current.length) {
      window.addEventListener("scroll", () => {
        handleScroll();
      });
    }
  }, [handleScroll, scrollRef]);

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
