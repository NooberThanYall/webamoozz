'use client'
import React from "react";
import sampleBlogData from "@/utils/sampleBlogData";
import BlogCard from "../partials/BlogCard";

const RecentBlogs = () => {
  const widthIsLower = window.innerWidth < 780;
  const theData = widthIsLower ? sampleBlogData.slice(0, 4) : sampleBlogData
  
  return (
    <div className="max-w-7xl mx-auto py-6 px-3 text-2xl ">
      <h5 className="md:text-3xl text-lg">مقالات اخیر</h5>
      <div className="flex flex-wrap justify-between w-full">
        {theData.map((blog) => {
          return (
            <BlogCard
              key={blog.published_at}
              title={blog.title}
              desc={blog.description}
              srcProp={"https://picsum.photos/1920/1080"}
              altProp={blog.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentBlogs;
