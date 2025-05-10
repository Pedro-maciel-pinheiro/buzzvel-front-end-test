import CarouselSlider from "@/components/carousel-slider";
import { number_of_users } from "@/constant";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CommunityShowcaseSection = () => {
  return (
    <>
      <div className="flex h-auto w-fit flex-col">
        <section
          className="grid h-auto w-full gap-10 md:grid-cols-2"
          aria-labelledby="community-heading"
        >
          <div className="order-1 flex flex-col justify-center gap-2 md:order-2">
            <header className="relative h-auto w-full text-4xl font-bold lg:text-5xl">
              <h2 id="community-heading">
                Meet internati
                <span className="relative inline-block">
                  onal
                  <Image
                    src="/img/plane-departure.png"
                    alt="Airplane taking off representing international outreach"
                    width={60}
                    height={50}
                    className="absolute -top-12 lg:right-6"
                  />
                </span>{" "}
                students & teachers
              </h2>
            </header>

            <p className="font-medium text-base text-gray-800">
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
              senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
              facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
              urna, faucibus aenean lorem faucibus integer.
            </p>

            <div className="flex gap-2 self-start font-medium text-blue-500">
              <Link href="/community" aria-label="Explore teachers and students">
                Explore teachers and students
              </Link>
              <ArrowRight aria-hidden="true" />
            </div>
          </div>

          <div className="order-2 md:order-1">
            <Image
              src="/img/Col.png"
              alt="Illustration representing global student and teacher community"
              width={550}
              height={550}
            />
          </div>
        </section>

        <section
          className="bg-darkblue mt-5 flex h-full w-full flex-col items-center justify-evenly rounded-sm md:h-80 md:flex-row"
          aria-label="User statistics"
        >
          <ul className="flex flex-col md:flex-row w-full h-full items-center justify-around">
            {number_of_users.map((item) => (
              <li
                key={item.title}
                className="text-yellow my-4 flex flex-col items-center gap-3"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} icon`}
                  width={64}
                  height={64}
                />
                <span className="text-5xl font-bold">{item.number}</span>
                <p className="text-center">{item.title}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section
        className="mt-20 flex h-auto w-full flex-col items-center"
        aria-label="Community stories carousel"
      >
        <CarouselSlider />
      </section>
    </>
  );
};
