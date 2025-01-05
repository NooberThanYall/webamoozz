'use client'
import React, { useRef } from 'react'
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';
import { encrypt } from '@/lib/auth/jwt';

type infoType = {
  title: string,
  desc: string
}
const childrenVariantsX: Variants = {
  hidden: {
    opacity: 0,
    x: 150, // Add movement for children
  },
  show: {
    opacity: 1,
    x: 0, // Reset position when shown
    transition: {
      duration: 0.5, // Smooth animations
    },
  },
};
const childrenVariantsY: Variants = {
  hidden: {
    opacity: 0,
    x: -150, // Add movement for children
  },
  show: {
    opacity: 1,
    x: 0, // Reset position when shown
    transition: {
      duration: 0.5, // Smooth animations
    },
  },
};

const TheImageAndTextThing = ({i, info, orders}: {i: number, info: infoType, orders: number[], }) => {
  const bigAssRef = useRef(null);
  const inView = useInView(bigAssRef)

  const sth = encrypt({
    name: 'kok',
    email: 'kk@of.com'
  })
  console.log(sth);

  return (
    <motion.div className='md:w-full flex flex-col md:flex-row justify-between items-center w-[80%] md:border-none border-green-400 border-b border-solid py-4' ref={bigAssRef}
    variants={orders[0] ? childrenVariantsX : childrenVariantsY} initial={'hidden'} animate={inView ? 'show' : 'hidden'}>
        <Image src={`/images/${i}-ill.jpg`} alt='illustration' width={400}  height={200} className={`order-${orders[0]}`} />
        <div className={`order-${orders[1]} w-72 `}>
            <h2 className='text-2xl __className_43c461'>{info.title}</h2>
            <p className='text-sm text-gray-400 mt-6 leading-6'>{info.desc}</p>
        </div>
    </motion.div>
  )
}

export default TheImageAndTextThing