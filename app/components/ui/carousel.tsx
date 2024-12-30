import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

// import { RxArrowTopRight } from "react-icons/rx";
import ServiceData from "@/utils/sampleBlogData";
import BlogCard from "../partials/BlogCard";

const ActiveSlider = () => {
  return (
    // <div className="flex items-center justify-center flex-col h-[900px] bg-[#6c34af]">
    <div className="flex justify-center items-center bg-gray-100 py-10">
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
        1440: { slidesPerView: 4, spaceBetween: 40 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="max-w-[90%] lg:max-w-[80%]"
    >
      {ServiceData.map((blog) => (
        <SwiperSlide key={blog.title}>
          <BlogCard
            title={blog.title}
            desc={blog.description}
            srcProp={"https://picsum.photos/300/180"}
            altProp={blog.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  
    // </div>
  );
};

export default ActiveSlider;