import Image from "next/image";
import React from "react";

const BlogCard = ({title, desc, srcProp, altProp}: {title: string, desc: string, srcProp: string, altProp: string}) => {
  return (
    <div className="md:w-[calc(25%-20px)] w-[calc(50%-10px)] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-4">
      <a href="#">
        <Image className="rounded-t-lg" src={srcProp} alt={altProp} width={364} height={240}/>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 md:text-xl text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 md:text-sm hidden md:block text-[11px] leading-5 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        <a
          href="#"
          className="inline-flex items-center md:px-3 px-1  md:py-2 md:text-sm text-[10px] font-medium text-center text-white bg-green-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          بیشتر بخوانید
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden='true'
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
