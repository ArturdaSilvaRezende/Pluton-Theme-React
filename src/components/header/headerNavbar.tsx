import { MutableRefObject, useCallback, useEffect } from "react";
import * as C from "./style";

import { useHeader } from "../../shared/contexts/contextHeader";

export const NavbarHeader = () => {
  const { menuRef } = useHeader();

  const NavbarResize = useCallback(() => {
    window.onresize = () => {
      if (window.innerWidth > 767) {
        (menuRef as MutableRefObject<HTMLElement>).current.classList.remove(
          "zoomOutUp"
        );
        (menuRef as MutableRefObject<HTMLElement>).current.style.display =
          "block";
      } else {
        (menuRef as MutableRefObject<HTMLElement>).current.style.display =
          "none";
      }
    };
  }, [menuRef]);

  useEffect(() => {
    NavbarResize();
  }, [NavbarResize]);

  const scrollClick = useCallback((event: Event) => {
    const { target } = event;
    if (target) {
      const id = (target as HTMLLIElement).getAttribute("data-scroll-to");
      if (id !== null) {
        const to = document.getElementById(id);

        if (to !== null) {
          window.scroll({
            top: to.offsetTop - 25,
            behavior: "smooth",
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    const target = document.querySelectorAll("[data-scroll-to]");
    target.forEach((item) => {
      item.addEventListener("click", scrollClick);
    });
  }, [scrollClick]);

  return (
    <C.Navbar ref={menuRef as MutableRefObject<HTMLElement>}>
      <ul>
        <li data-scroll-to="services">Services</li>
        <li data-scroll-to="portfolio">Portfolio</li>
        <li data-scroll-to="about">About</li>
        <li data-scroll-to="clients">Clients</li>
        <li data-scroll-to="price">Prince</li>
        <li data-scroll-to="contactus">Contact</li>
      </ul>
    </C.Navbar>
  );
};
