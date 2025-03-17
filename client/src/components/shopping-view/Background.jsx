import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import video1 from "../../assets/Background/women video.mov";
import video2 from "../../assets/Background/men video.mp4";
import womenItemsImg from "../../assets/Background/women items.jpg";
import menItemsImg from "../../assets/Background/men items.jpg";
import accessoiresImg from "../../assets/Background/DIOR.avif";
import {useNavigate} from "react-router-dom";

const Background = () => {
  const navigate = useNavigate();
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
<<<<<<< HEAD
            <video src={video1} autoPlay loop muted className="w-full h-auto" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <video src={video2} autoPlay loop muted className="w-full h-auto" />
=======
            <video src={video2} autoPlay loop muted className="hero-video" />
>>>>>>> main
          </div>
        </SwiperSlide>

        <SwiperSlide>
<<<<<<< HEAD
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10 md:mt-36">
            <img
              src={womenItemsImg}
              alt="Women's Collection"
              className="w-full md:w-1/3 h-auto"
              style={{ height: "600px" }}
=======
          <div className="slide-content item-container">
          <button onClick={() => navigate('/category/female')} className="item-button">
         <button className="border-1 p-1 m-2 hover:bg-[#C5C7CA] hover:cursor-pointer "> SHOP WOMEN</button>
            <img
              src={womenItemsImg}
              alt="Women's Collection"
              className="item-image women-image  hover:cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out  text-white px-4 py-2 rounded"
>>>>>>> main
            />
            </button>
            <button onClick={() => navigate('/category/jewelery')} className="item-button">
            <button className="border-1 p-1 m-2 hover:bg-[#C5C7CA] hover:cursor-pointer ">SHOP ACCESSORIES</button>
            <img
              src={accessoiresImg}
              alt="Accessories Collection"
<<<<<<< HEAD
              className="w-full md:w-1/3 h-auto"
              style={{ height: "600px" }}
=======
              className="item-image accessories-image  hover:cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out  text-white px-4  rounded"
>>>>>>> main
            />
            </button>
            <button onClick={() => navigate('/category/male')} className="item-button">
             <button className="border-1 p-1 m-2 hover:bg-[#C5C7CA] hover:cursor-pointer">SHOP MEN</button>
            <img
              src={menItemsImg}
              alt="Men's Collection"
<<<<<<< HEAD
              className="w-full md:w-1/3 h-auto"
              style={{ height: "600px" }}
=======
              className="item-image  hover:cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out  text-white px-4 py-2 rounded "
              
>>>>>>> main
            />
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-content">
            <video src={video1} autoPlay loop muted className="hero-video" />
          </div>
        </SwiperSlide>

       
      </Swiper>
    </div>
  );
};

export default Background;