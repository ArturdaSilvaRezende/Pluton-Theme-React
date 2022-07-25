import { useEffect, useRef } from "react";

//styled-components
import * as C from "./style";

//components
import { MenuControl } from "./headerMenuControl";
import { NavbarHeader } from "./headerNavbar";

//images
import Logo from "./images/logo.png";

//animations
import "./animations.css";

//provider
import StoreProvider from "../../shared/contexts/contextHeader";

export const Header = () => {
  const HeaderRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    function NavbarScrollTop() {
      if (HeaderRef.current !== null) {
        if (
          document.body.scrollTop > 330 ||
          document.documentElement.scrollTop > 330
        ) {
          HeaderRef.current.classList.add("headerShow");
          HeaderRef.current.style.position = "fixed";
        } else {
          HeaderRef.current.classList.remove("headerShow");
          HeaderRef.current.style.position = "absolute";
        }
      }
    }

    window.addEventListener("scroll", NavbarScrollTop);

    return () => window.removeEventListener("scroll", NavbarScrollTop);
  }, [HeaderRef]);

  return (
    <StoreProvider>
      <C.Header ref={HeaderRef}>
        <C.HeaderContainer>
          <C.Logo href="index.html">
            <img src={Logo} alt="pluton-theme-logo" />
          </C.Logo>

          <NavbarHeader />

          <MenuControl />
        </C.HeaderContainer>
      </C.Header>
    </StoreProvider>
  );
};
