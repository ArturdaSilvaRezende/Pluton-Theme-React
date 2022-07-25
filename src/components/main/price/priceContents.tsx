import * as C from "./style";
import { PriceList } from "./priceList";
import { useMain } from "../../../shared/contexts/mainContext";

export const PriceContents = () => {
  const { handleRef } = useMain();

  return (
    <C.PriceContents>
      {PriceList.map((item) => (
        <div
          className="price__card"
          key={item.id}
          data-scroll="bottom"
          ref={handleRef}
        >
          <h2>{item.id}</h2>
          <div className="price__description">
            <p className="price__number">{item.price}</p>
            <p>
              <span>{item.setup[0]}</span>
              {item.setup[1]}
            </p>
            <p>
              <span>{item.support[0]}</span>
              {item.support[1]}
            </p>
            <p>
              <span>{item.storage[0]}</span>
              {item.storage[1]}
            </p>
            <button type="button">Buy</button>
          </div>
        </div>
      ))}
    </C.PriceContents>
  );
};
