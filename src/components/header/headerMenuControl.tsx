import { MutableRefObject, useCallback } from "react";

//style
import * as C from "./style";

//images
import BtnOpenMenu from "./images/open-menu-icon.png";
import BtnCloseMenu from "./images/close-menu-icon.png";

//context
import { useHeader } from "../../shared/contexts/contextHeader";

export const MenuControl = () => {
  const { isMenu, setIsMenu, menuRef } = useHeader();

  const handleMenuClick = useCallback(() => {
    if (isMenu === false) {
      (menuRef as MutableRefObject<HTMLElement>).current.classList.remove(
        "zoomOutUp"
      );
      (menuRef as MutableRefObject<HTMLElement>).current.style.display =
        "block";
      (menuRef as MutableRefObject<HTMLElement>).current.classList.add(
        "zoomInUp"
      );

      return setIsMenu(true);
    } else {
      (menuRef as MutableRefObject<HTMLElement>).current.classList.remove(
        "zoomInUp"
      );
      (menuRef as MutableRefObject<HTMLElement>).current.classList.add(
        "zoomOutUp"
      );

      setTimeout(() => {
        (menuRef as MutableRefObject<HTMLElement>).current.style.display =
          "none";
      }, 1100);

      return setIsMenu(false);
    }
  }, [isMenu, setIsMenu, menuRef]);

  return (
    <C.BtnMenu onClick={handleMenuClick}>
      <img
        src={isMenu ? BtnCloseMenu : BtnOpenMenu}
        alt="btn-open-menu-header"
      />
    </C.BtnMenu>
  );
};
