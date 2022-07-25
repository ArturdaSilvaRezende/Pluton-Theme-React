import * as C from "./style";
import { filter } from "./index";
import "./animation.css";

export const NavPill = (props: filter) => {
  return (
    <C.NavPill>
      <ul>
        <li
          onClick={() => props.setFilter("all")}
          className={props.filter === "all" ? "active" : ""}
        >
          All
        </li>
        <li
          onClick={() => props.setFilter("web")}
          className={props.filter === "web" ? "active" : ""}
        >
          Web
        </li>
        <li
          onClick={() => props.setFilter("photo")}
          className={props.filter === "photo" ? "active" : ""}
        >
          Photo
        </li>
        <li
          onClick={() => props.setFilter("identity")}
          className={props.filter === "identity" ? "active" : ""}
        >
          Identity
        </li>
      </ul>
    </C.NavPill>
  );
};
