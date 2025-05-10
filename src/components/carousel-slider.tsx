"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { comments } from "@/constant";

const CarouselSlider = () => {
  const [swiper, setSwiper] = useState<null | SwiperType>(null);
  const [slidesPerView, setSlidesPerView] = useState<number>(3.2);
  const images = comments;

  useEffect(() => {
    const updateSlidesPerView = () => {
      const slideResize = window.innerWidth;
      const slides = slideResize < 768 ? 1.2 : slideResize < 1100 ? 2 : 3;
      setSlidesPerView(slides);
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <>
      <div className="h-a mb-10 flex w-full flex-row items-center justify-between">
        <h3 className="text-darkblue w-full text-4xl font-bold lg:text-5xl">
          What everyone says
        </h3>

        <div className="md:flex gap-5 hidden">
          <button
            onClick={(e) => {
              e.preventDefault();
              swiper?.slidePrev();
            }}
            aria-label="previus image"
            className="border-orange duration-100 text-orange flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 active:-translate-x-1"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              swiper?.slideNext();
            }}
            aria-label="next image"
            className="border-orange duration-100 text-orange flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 active:translate-x-1"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <section className="h-80 w-full rounded-lg">
        <Swiper
          onSwiper={(swiper) => setSwiper(swiper)}
          spaceBetween={20}
          modules={[Pagination]}
          grabCursor={true}
          slidesPerView={slidesPerView}
          className="h-full w-full"
        >
          {images.map((item, index) => (
            <SwiperSlide
              key={index}
              className="h-full max-h-60 w-full rounded-xl border-2 p-3 shadow-xl"
            >
              <ol className="bw-full flex h-full flex-col justify-between gap-2 p-1">
                <li className="p-2 text-gray-800">{item.comment}</li>
                <li className="flex h-15 w-full gap-2 self-start">
                  <Image
                    src={item.imageUrl}
                    alt={""}
                    className="h-15 max-w-15 self-center rounded-full object-cover"
                    width={1050}
                    height={1050}
                  />
                  <div className="self-center">
                    <p className="font-semibold text-gray-700">{item.name}</p>
                    <p className="font-medium text-gray-500">{item.career}</p>
                  </div>
                </li>
              </ol>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default CarouselSlider;
