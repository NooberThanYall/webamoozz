import { CircleArrowDown, Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center">
      <Image
        alt="background"
        src={"/images/coding_background.webp"}
        className="object-cover opacity-30"
        layout="fill"
        quality={100}
      />
      <div className="z-20">
        <h2 className="text-[30px] text-white">
          {" "}
          مسیر شروع برنامه نویسی از اینجاست!
        </h2>
        <p className="text-center text-white mt-4">
          وب آموز، دنیای مقالات و دوره های برنامه نویسی بخصوص وب
        </p>
        <form method="GET" className="mb-8 flex items-center
        ">
          <input
            type="text"
            name="search"
            className="px-2 py-3 text-gray-900 flex-1 outline-none border-none rounded-r-md opacity-90 mt-4"
            placeholder="جستجو در مقالات و دوره ها"
          />
          <button className="w-12 bg-green-500 h-[52px] mt-4 outline-none border-none rounded-e-md flex justify-center items-center">
            <Search height={25} width={25} color="white"/>
          </button>
          
        </form>

        <CircleArrowDown width={30} height={30}  color="gray" className="mx-auto " />
      </div>

    </div>
  );
};

export default Hero;
