"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { slider_data } from "@/constant";

export default function SwiperSlider() {
  return (
    <section className="my-30 flex h-auto w-full items-center justify-center md:my-20">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: true,
        }}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="bg-yellow flex w-full items-center justify-between rounded-sm"
      >
        {slider_data.map((item) => (
          <SwiperSlide key={item.subtitle} className="h-full w-full p-5">
            <div className="flex flex-col items-center justify-evenly md:flex-row">
              <ol className="flex max-w-100 flex-col gap-2">
                <li className="font-medium">{item.text}</li>

                <li className="font-semibold">{item.subtitle}</li>
              </ol>

              <Image
                src={item.image}
                alt={item.subtitle}
                width={500}
                height={500}
                className="max-w-100 md:max-w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
