import React from 'react'
// import { AnimatedTooltip } from './UI/AnimatedToolTip'images/
import { AnimatedTooltip } from './../ui/tooltip';
const people = [
    {
      id: 1,
      name: "جاوا اسکریپت",
      designation: '',
      image:
        "https://zeba.academy/wp-content/uploads/2022/11/javascript-basics.png",
    },
    {
      id: 2,
      name: 'ریکت',
      designation: '',
      image:
        "/images/react.png",
    },
    {
      id: 3,
      name: 'نکست',
      designation: "",
      image:
        "/images/next.png",
    },
    {
      id: 4,
      name: "تیلویند",
      designation: "",
      image:
        "/images/tailwind.png",
    },
    {
      id: 5,
      name: "نود جی اس",
      designation: "",
      image:
        "/images/node.png",
    },
    {
      id: 6,
      name: "مونگو ",
      designation: "",
      image:
        "/images/mongob.png",
    },
  ];
const Skills = () => {

  return (
    <div className="flex flex- items-center justify-center mt-10 w-full bg-green-400 py-4">
      <AnimatedTooltip items={people} />
      {/* <div className="max-w-7xl mx-auto">
      
      </div> */}
    </div>
  )
}

export default Skills