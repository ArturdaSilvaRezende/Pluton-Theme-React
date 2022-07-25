import * as C from "./style";
import { Triangle } from "../../../shared/style/triangle";
import { useMain } from "../../../shared/contexts/mainContext";

export const Hosting = () => {
  const { handleRef } = useMain();

  return (
    <C.Hosting>
      <Triangle
        borderColor="var(--black-color)"
        data-scroll="bottom"
        ref={handleRef}
      />
      <div>
        <p>
          Need hosting for pluton? We recommend DreamHost ultrafast SSD hosting,
          plust unlimited storage & bandwidth
        </p>
        <button>Get it Now</button>
      </div>
    </C.Hosting>
  );
};
