"use client";

import React, { useRef } from "react";
import sampleBlogData from "@/utils/sampleBlogData";
import BlogCard from "../partials/BlogCard";
import { useInView, motion, Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Children animate with delay
    },
  },
};
const childrenVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50, // Add movement for children
  },
  show: {
    opacity: 1,
    y: 0, // Reset position when shown
    transition: {
      duration: 0.5, // Smooth animations
    },
  },
};

const RecentBlogs = () => {
  const blogsRef = useRef(null);
  const inView = useInView(blogsRef, { once: true });

  return (
    <div className="max-w-7xl mx-auto py-6 px-3 text-2xl ">
      <>
        <h5 className="md:text-3xl text-lg __className_43c461">مقالات اخیر</h5>
        <motion.div
          className="flex flex-wrap justify-between gap-y-4 w-full mt-6"
          ref={blogsRef}
          variants={containerVariants}
          initial="hidden" // Set initial state for parent
          animate={inView ? "show" : "hidden"} // Animate when in view
        >
          {sampleBlogData.map((blog) => (
            <BlogCard
              variants={childrenVariants} // Pass child variants
              styles={{}} // Remove unnecessary styles
              key={blog.published_at}
              title={blog.title}
              desc={blog.description}
              srcProp={"https://picsum.photos/1920/1080"}
              altProp={blog.title}
            />
          ))}
        </motion.div>
      </>
    </div>
  );
};

export default RecentBlogs;
