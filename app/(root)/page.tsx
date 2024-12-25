import Image from "next/image";
import Hero from "../components/partials/Hero";
import RecentBlogs from "../components/sections/RecentBlogs";
import 'dotenv'
import Skills from "../components/sections/skills";
import Intro from './../components/sections/intro';

export default function Home() {
  return (
    <>
    <Hero/>
    <RecentBlogs/>
    <Skills />
    <Intro />
    </>
  );
}
