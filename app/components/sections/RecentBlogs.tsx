import React from "react";
import sampleBlogData from "@/utils/sampleBlogData";
import BlogCard from "../partials/BlogCard";


const RecentBlogs =  async () => {

  return (

    <div className="max-w-7xl mx-auto py-6 text-2xl ">
        <h5 className="text-3xl">مقالات اخیر</h5>
       <div className="flex flex-wrap justify-between w-full">
        
      {sampleBlogData.map(blog=> {
        return <BlogCard key={blog.published_at} title={blog.title} desc={blog.description} srcProp={'https://picsum.photos/1920/1080'} altProp={blog.title}/>
      }) }
        </div> 
    </div>
  );
};

export default RecentBlogs;
