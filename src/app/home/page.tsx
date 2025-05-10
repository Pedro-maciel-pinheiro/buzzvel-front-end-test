"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, PlayCircle } from "lucide-react";
import { company_icons, mid_section_text } from "@/constant/index";
import Link from "next/link";
import Head from "next/head"; // For meta tags

export default function HomePage() {
  const [maxWidthHeroSlider, setMaxWidthHeroSlider] = useState<number>(0);
  const [maxWidthSectionSlider, setMaxWidthSectionSlider] = useState<number>(0);

  useEffect(() => {
    const updateWidthSize = () => {
      const widthResize = window.innerWidth;
      setMaxWidthHeroSlider(widthResize < 1030 ? 120 : 150);
      setMaxWidthSectionSlider(widthResize < 1030 ? 160 : 220);
    };

    updateWidthSize();
    window.addEventListener("resize", updateWidthSize);
    return () => window.removeEventListener("resize", updateWidthSize);
  }, []);

  return (
    <>
      <Head>
        <title>Teach Students Worldwide | Your Learning App</title>
        <meta
          name="description"
          content="An all-in-one teaching platform that helps you teach students worldwide. Start your journey today!"
        />
      </Head>

      <main className="mt-10 flex flex-col items-center justify-center gap-25">
        <section
          aria-labelledby="hero-heading"
          className="grid h-full w-full gap-12 md:mt-20 md:grid-cols-2"
        >
          <div className="flex w-full flex-col items-start justify-center gap-8">
            <h1
              id="hero-heading"
              className="text-darkblue flex flex-col items-start gap-1 text-5xl font-bold lg:text-6xl"
            >
              <span className="relative flex">
                Teach students
                <motion.span
                  aria-hidden="true"
                  initial={{ width: 10 }}
                  animate={{ width: maxWidthHeroSlider }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                    ease: "easeInOut",
                    damping: 50,
                    mass: 0.5,
                  }}
                  className="bg-orange absolute top-12 left-2 h-1.5 w-full rounded-full lg:top-14"
                />
              </span>
              worldwide
            </h1>

            <p className="w-90 px-1 text-sm font-medium">
              Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin
              massa tincidunt viverra lectus pulvinar.
            </p>

            <div className="flex gap-10">
              <Link href="/sign-up" passHref>
                <Button
                  className="h-12 w-35 cursor-pointer bg-darkorange text-sm hover:bg-orange-700"
                  aria-label="Sign up now"
                >
                  Sign Up Now
                </Button>
              </Link>

              <Link
                href="#demo"
                className="flex items-center gap-3 font-semibold text-blue-500"
                aria-label="View demo video"
              >
                <PlayCircle aria-hidden="true" /> View Demo
              </Link>
            </div>

            <div className="flex flex-col gap-2 px-1 font-medium text-gray-500">
              <p>Trusted by leading companies</p>
              <ol className="flex items-center gap-4">
                {company_icons.map((icon) => (
                  <li key={icon.name}>
                    <Link href={icon.href} aria-label={`Visit ${icon.name}`}>
                      <Image
                        src={icon.icon}
                        alt={icon.name}
                        width={30}
                        height={30}
                        className="transition-all duration-300 hover:-translate-y-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <motion.div
            initial={{ y: 0 }}
            whileInView={{ y: 3 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              ease: "easeInOut",
              damping: 30,
              mass: 0.5,
            }}
            className="relative flex items-center justify-center"
          >
            <Image
              src="/img/Group 50.png"
              alt="Instructor teaching students online"
              width={500}
              height={600}
            />
          </motion.div>
        </section>

        <section
          aria-labelledby="features-heading"
          className="grid md:mt-4 md:grid-cols-2"
        >
          <div className="flex flex-col items-center justify-start gap-6">
            <h2
              id="features-heading"
              className="text-darkblue text-4xl font-bold md:text-5xl"
            >
              An{" "}
              <span className="relative">
                all-in-one
                <motion.span
                  aria-hidden="true"
                  initial={{ width: 10 }}
                  whileInView={{ width: maxWidthSectionSlider }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                    ease: "easeInOut",
                    damping: 50,
                    mass: 0.5,
                  }}
                  className="bg-orange absolute top-10 left-0.5 h-1.5 w-full rounded-full md:top-14"
                />
              </span>{" "}
              app that makes it easier
            </h2>

            <p className="max-w-120 self-start px-2 text-justify">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet, dui sit suspendisse.
            </p>

            <ol className="flex w-full flex-col items-start justify-start gap-4">
              {mid_section_text.map((text) => (
                <li
                  key={text.text}
                  className="flex gap-1 text-lg font-medium text-gray-800"
                >
                  <Check size={20} className="mt-1" aria-hidden="true" />{" "}
                  {text.text}
                </li>
              ))}
            </ol>

            <div className="w-full px-2">
              <Link
                href={""}
                className="flex items-center gap-2 font-medium text-blue-500"
              >
                Find more about the app <ArrowRight />
              </Link>
            </div>
          </div>

          <div className="relative mt-25 flex items-center md:mt-0">
            <span className="absolute z-10 hidden md:block">
              <Image
                src="/img/Group 51.png"
                alt="App interface showcasing features"
                width={600}
                height={500}
              />
            </span>
            <span className="absolute z-10 block md:hidden">
              <Image
                src="/img/Group.png"
                alt="App interface for smaller devices"
                width={500}
                height={500}
              />
            </span>
            <motion.span className="bg-orange flex h-96 w-96 items-center justify-center rounded-sm" />
          </div>
        </section>
      </main>
    </>
  );
}
