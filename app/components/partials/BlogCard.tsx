import Image from "next/image";
import React from "react";
import { motion, Variants } from 'framer-motion';

const BlogCard = ({
  title,
  desc,
  srcProp,
  altProp,
  styles,
  variants
}: {
  title: string;
  desc: string;
  srcProp: string;
  altProp: string;
  styles: object;
  variants: Variants;
}) => {
  return (
    <motion.div
      className="w-full max-w-[300px] min-h-[380px] bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
      style={styles}
      variants={variants} // Attach the variants here
    >
      <Image
        className="w-full h-[180px] object-cover"
        src={srcProp}
        alt={altProp}
        width={300}
        height={180}
      />
      <div className="p-4">
        <div>
          <h5 className="text-lg font-semibold text-gray-900">{title}</h5>
          <p className="text-sm text-gray-700 mt-2">{desc}</p>
        </div>
        <a
          href="#"
          className="mt-4 inline-block px-4 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600"
        >
          بیشتر بخوانید
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;
