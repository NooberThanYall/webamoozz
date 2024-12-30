import Image from "next/image";
import Hero from "../components/partials/Hero";
import RecentBlogs from "../components/sections/RecentBlogs";
import "dotenv";
import Skills from "../components/sections/skills";
import Intro from "./../components/sections/intro";
import { Footer } from "../components/sections/Footer";
import Card from "../components/ui/Card";
import connectDB from "@/lib/db/mongodb";

export default  async function Home() {
  return (
    <div className="h-full w-full bg-white">
      <Hero />
      <Card />
      <RecentBlogs />
      <Skills />
      <Intro />
      <Footer />
    </div>
  );
}
