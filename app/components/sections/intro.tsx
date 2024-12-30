'use client'
import React, { useRef } from "react";
import TheImageAndTextThing from "../partials/TheImageAndTextThing";
import { motion, useInView, Variants } from 'framer-motion';
import { containerVariants } from "./RecentBlogs";

const thingsDescription = [
  {
    title: "یادگیری سریع و عملی",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
  },
  {
    title: "مدرسان با تجربه",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
  },
  {
    title: "مقالات روزانه بدرد نخور",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ",
  },
];

const orders = [
  [1, 0],
  [0, 1],
  [1, 0],
];


const Intro = () => {
  console.log();
  

  return (
    <motion.div
    className="max-w-4xl mx-auto md:py-6 flex flex-col items-center "
    >
      {[...Array(3)].map((_, i) => {
        return (
          <TheImageAndTextThing i={i + 1} key={i} info={thingsDescription[i]} orders={orders[i]} />
        );
      })}
    </motion.div>
  );
};

export default Intro;
