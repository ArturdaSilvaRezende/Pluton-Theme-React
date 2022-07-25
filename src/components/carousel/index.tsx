import * as C from "./style";
import { typeSlider } from "./carouselList";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Autoplay } from "swiper";

export const Carousel = () => {
  return (
    <C.CarouselSection>
      <div className="carousel__mask"></div>

      <Swiper
        navigation={true}
        allowTouchMove={false}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {typeSlider.map((item: any) => (
          <SwiperSlide key={item.id}>
            <C.carouselContents>
              <C.carouselDescription>
                <hgroup>
                  <h2>{item.title}</h2>
                  <h3>{item.subTitle}</h3>
                </hgroup>
                <p>{item.desc}</p>
                <button type="button">
                  <span>{item.button}</span>
                </button>
              </C.carouselDescription>

              <C.carouselFigure>
                <img src={item.img} alt={`slider ${item.title}`} />
              </C.carouselFigure>
            </C.carouselContents>
          </SwiperSlide>
        ))}
      </Swiper>
    </C.CarouselSection>
  );
};
