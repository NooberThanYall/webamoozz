"use client";
import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export default function Card() {
  const mainRef = useRef(null)
  const inView = useInView(mainRef, {once: true, amount: .25})
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]); // Reversed values
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Reversed values
  const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]); // Adjusted rotation values
  const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]); // Adjusted rotation values

  console.log(inView);
  
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent> /* what type should i be using for this? its not letting me build*/ ) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;
    console.log(event.clientX);

    cardX.set(offsetX /4);
    cardY.set(offsetY/4);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      style={{
        perspective: 800,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="mt-6"
    >
      {/* this div can be used as the 'dotted grid' */}
      <motion.div
        style={{
          margin: "auto",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          perspective: 800,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          rotateX,
          rotateY,
        }}
        transition={{ velocity: 0 }}
      >
        <motion.div
          key="card"
          ref={mainRef}
          style={{
            boxShadow: "0px 0px 30px -7px rgba(0,0,0,0.75)",
            borderRadius: 10,
            transformStyle: "preserve-3d",
            perspective: 800, // Set perspective on the card
            cardRotateX,
            cardRotateY,
          }}
          initial={{
            x: -150,
            opacity: 0
          }}
          animate={!inView ? {
            x: -150,
            opacity: 0
          } : {
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.7,
              ease: 'easeOut'
            }
          }}
          
          className="bg-green-300 w-7/12 h-[500px] flex justify-around items-center px-6 text-green-800 border-green-950 border-dotted border-2"
          transition={{ velocity: 0 }}
        >
          <Image
            src={`/images/laptop.png`}
            alt="illustration"
            width={400}
            height={200}
            className="order-1"
          />
          <div className={`w-72 order-0`}>
            <h2 className="text-[35px] __className_43c461 text-green-900">
              نهایت یادگیری عملی با مدرسان
            </h2>
            <p className="text-md leading-6 text-green-900 mt-6">
              یپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
              از طراحان گرافیک است چاپگرها و متون بلکه روزنامه وسطرآنچنان که
              لازم است{" "}
            </p>
            <motion.button
            className="rounded-lg border-2 border-dashed border-green-950 bg-white px-5 py-2
            __className_43c461 uppercase text-green-900 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_green] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none mt-4">
              ثبت نام
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
