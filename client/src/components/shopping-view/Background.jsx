import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import video1 from "../../assets/Background/women video.mov";
import video2 from "../../assets/Background/men video.mp4";
import womenItemsImg from "../../assets/Background/women items.jpg";
import menItemsImg from "../../assets/Background/men items.jpg";
import accessoiresImg from "../../assets/Background/accessoires items .jpg";

const Background = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden bg-black flex flex-col justify-center items-center">
      <Swiper
        direction="vertical"
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        modules={[Navigation, Pagination, Mousewheel]}
        className="h-screen"
      >
        <SwiperSlide>
          <div className="slide-content">
            <video src={video1} autoPlay loop muted className="w-full h-auto" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <video src={video2} autoPlay loop muted className="w-full h-auto" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10 md:mt-36">
            <img
              src={womenItemsImg}
              alt="Women's Collection"
              className="w-full md:w-1/3 h-auto"
              style={{ height: "600px" }}
            />
            <img
              src={accessoiresImg}
              alt="Accessories Collection"
              className="w-full md:w-1/3 h-auto"
              style={{ height: "600px" }}
            />
            <img
              src={menItemsImg}
              alt="Men's Collection"
              className="w-full md:w-1/3 h-auto"
              style={{ height: "600px" }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Background;