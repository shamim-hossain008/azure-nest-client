import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../../src/styles.css";

// import required modules
import { useQuery } from "@tanstack/react-query";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Banner = () => {
  const axiosPublic = useAxiosPublic();

  const { data: rooms = [] } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/rooms");
      return data;
    },
  });

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {rooms.map((room) => (
          <SwiperSlide key={room._id}>
            <img
              className="w-full h-4/5 mx-auto rounded-xl  overflow-hidden object-cover"
              src={room?.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
