"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/contact";

export const BottomSection = () => {
  const [maxWidthSlider, setMaxWidthSlider] = useState<number>(0);

  useEffect(() => {
    const updateWidthSize = () => {
      const widthResize = window.innerWidth;
      setMaxWidthSlider(widthResize < 1030 ? 110 : 180);
    };

    updateWidthSize();
    window.addEventListener("resize", updateWidthSize);
    return () => window.removeEventListener("resize", updateWidthSize);
  }, []);
  return (
    <>
      <section className="grid place-items-center md:grid-cols-2">
        <div className="flex flex-col gap-8">
          <h4 className="text-darkblue flex gap-2 text-3xl font-bold lg:text-5xl">
            All the cool {""}
            <span className="relative flex">
              features
              <motion.span
                aria-hidden="true"
                initial={{ width: 10 }}
                animate={{ width: maxWidthSlider }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.5,
                  ease: "easeInOut",
                  damping: 50,
                  mass: 0.5,
                }}
                className="bg-orange absolute top-8 left-1 h-1.5 w-full rounded-full lg:top-14"
              />
            </span>
          </h4>
          <p className="font-medium">
            Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio
            ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
            pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,
            ullamcorper non viverra a, neque orci.
          </p>

          <Link
            href={""}
            className="flex items-center font-medium text-blue-500"
          >
            View all the features <ArrowRight size={20} />
          </Link>
        </div>

        <div>
          <Image
            src={"/img/Right.png"}
            alt="section image"
            width={600}
            height={600}
          />
        </div>
      </section>

      <section className="bg-yellow flex h-170 w-full items-center justify-center md:h-auto rounded-sm">
        <div className="flex h-full w-full flex-col justify-between p-2 md:flex-row overflow-hidden">
          <Image
            src={"/img/Cards-1.png"}
            alt="card image"
            width={1000}
            height={600}
            className="hidden max-w-100 md:block"
          />
          <Image
            src={"/img/Cards-1-mobile.png"}
            alt="card image"
            width={1000}
            height={600}
            className="block max-w-100 md:hidden"
          />

          <Image
            src={"/img/Cards-2.png"}
            alt="card image"
            width={1000}
            height={600}
            className="hidden max-w-100 md:block"
          />
          <Image
            src={"/img/cards-2-mobile.png"}
            alt="card image"
            width={1000}
            height={600}
            className="block max-w-100 md:hidden"
          />
        </div>

        <div className="absolute flex h-full w-full flex-col items-center justify-center gap-5">
          <h4 className="text-darkblue text-3xl font-bold md:text-5xl">
            Join a world of learning
          </h4>

          <p className="text-center font-medium">
            Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
          </p>
          <p className=" font-medium">Risus elit et fringilla habitant ut facilisi.</p>
          <Link href={"/sign-up"}>
            <Button className="bg-darkorange rounded-sm h-12 w-50 cursor-pointer">Sign Up Now</Button>
          </Link>
        </div>
      </section>

      <div>
        <ContactForm/>
      </div>
    </>
  );
};
