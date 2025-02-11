import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import "./Background.css";
import video1 from "../../assets/Background/women video.mov";
import video2 from "../../assets/Background/men video.mp4";
import womenItemsImg from "../../assets/Background/women items.jpg";
import menItemsImg from "../../assets/Background/men items.jpg";
import accessoiresImg from "../../assets/Background/accessoires items .jpg";


const Background = () => {
  return (
    <div className="hero-section">
      <Swiper
        direction="vertical"
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        modules={[Navigation, Pagination, Mousewheel]}
        className="hero-swiper"
        style={{ height: "100vh" }}
      >
        <SwiperSlide>
          <div className="slide-content">
            <video src={video1} autoPlay loop muted className="hero-video" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <video src={video2} autoPlay loop muted className="hero-video" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content item-container">
            <img
              src={womenItemsImg}
              alt="Women's Collection"
              className="item-image women-image"
            />
            <img
              src={accessoiresImg}
              alt="Accessories Collection"
              className="item-image accessories-image"
            />
            <img
              src={menItemsImg}
              alt="Men's Collection"
              className="item-image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Background;
