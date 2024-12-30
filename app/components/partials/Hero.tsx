'use client'
import connectDB from "@/lib/db/mongodb";
import { CircleArrowDown, Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';

const Hero = () => {
  // await connectDB()
  return (
    <div className="h-screen w-screen bg-black">

    <motion.div initial={{
      // y:10,
      opacity:.5
    }}
    animate={{
      // y:0,
      opacity:1
    }}
    transition={{ duration: .7, delay: 0, ease: "easeOut" }} className="h-screen w-screen bg-black flex justify-center items-center">
      <Image
        alt="background"
        src={"/images/coding_background.png"}
        className="object-cover opacity-30"
        layout="fill"
        quality={100}
      />
      <motion.div 
      initial={{
        y:60,
        opacity:0
      }}
      animate={{
        y:0,
        opacity:1
      }}
      transition={{ duration: 1, delay: 0, ease: "easeOut" }}
      className="z-20 ">
        <h2 className="md:text-[30px] text-[25px] text-center text-white">
          {" "}
          مسیر شروع برنامه نویسی از اینجاست!
        </h2>
        <p className="text-center text-white text-[12px] md:text-sm opacity-80 mt-4">
          وب آموز، دنیای مقالات و دوره های برنامه نویسی بخصوص وب
        </p>
        
        <form
          method="GET"
          className="mb-8 flex items-center justify-center mx-auto md:w-full w-[70%]"
        >
          <input
            type="text"
            name="search"
            className="px-2 py-3 h-9 md:h-[52px] text-gray-900 flex-1 outline-none border-none rounded-r-md opacity-90 mt-4"
            placeholder="جستجو در مقالات و دوره ها"
          />
          <button className="w-12 bg-green-500 h-9 md:h-[52px] mt-4 outline-none border-none rounded-e-md flex justify-center items-center">
            <Search height={25} width={25} color="white" />
          </button>
        </form>

        <CircleArrowDown
          width={30}
          height={30}
          color="gray"
          className="mx-auto "
        />
      </motion.div>
    </motion.div>
    </div>
  );
};

export default Hero;
