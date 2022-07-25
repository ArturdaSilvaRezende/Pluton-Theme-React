import { MutableRefObject, createContext, useContext, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

type El = HTMLDivElement;

type Main = {
  scrollRef: React.Ref<HTMLDivElement[] | null>;
  handleRef: (el: HTMLDivElement) => void;
};

export const MainContext = createContext({} as Main);

export const useMain = () => {
  return useContext(MainContext);
};

export const MainProvider = ({ children }: Props) => {
  const scrollRef = useRef<HTMLDivElement[] | null>([]);

  const handleRef = (el: El) => {
    if (scrollRef) {
      if (
        el &&
        !(scrollRef as MutableRefObject<HTMLDivElement[]>).current.includes(el)
      ) {
        (scrollRef as MutableRefObject<HTMLDivElement[]>).current.push(el);
      }
    }
  };

  return (
    <MainContext.Provider value={{ scrollRef, handleRef }}>
      {children}
    </MainContext.Provider>
  );
};
