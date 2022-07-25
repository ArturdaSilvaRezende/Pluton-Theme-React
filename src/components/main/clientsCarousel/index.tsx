import * as C from "./style";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { ClientsCarouselList } from "./clientsCarouselList";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export const ClientsCarousel = () => {
  return (
    <C.ClientsCarouselSection>
      <C.Container>
        <C.HeaderCarousel>
          <h1>Our Clients</h1>
          <div>
            <button type="button" className="review-swiper-button-prev">
              <FaAngleLeft />
            </button>
            <button type="button" className="review-swiper-button-next">
              <FaAngleRight />
            </button>
          </div>
        </C.HeaderCarousel>

        <Swiper
          navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
          slidesPerView={3}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@0.75": {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {ClientsCarouselList.map((item) => (
            <SwiperSlide key={item.id}>
              <C.CardsCarousel>
                <img src={item.img} alt={item.alt} />
              </C.CardsCarousel>
            </SwiperSlide>
          ))}
        </Swiper>
      </C.Container>
    </C.ClientsCarouselSection>
  );
};
