import { GlobalStyle } from "./App-Style";

//components
import { Header } from "./components/header";
import { Carousel } from "./components/carousel";
import { Footer } from "./components/footer";
import { Main } from "./components/main/main";

//context
import { MainProvider } from "./shared/contexts/mainContext";

const App = () => {
  return (
    <>
      <MainProvider>
        <GlobalStyle />
        <Header />
        <Carousel />
        <Main />
        <Footer />
      </MainProvider>
    </>
  );
};

export default App;
