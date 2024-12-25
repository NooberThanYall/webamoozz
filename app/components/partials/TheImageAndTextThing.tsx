
import React from 'react'
import Image from 'next/image';

type infoType = {
  title: string,
  desc: string
}

const TheImageAndTextThing = ({i, info, orders}: {i: number, info: infoType, orders: number[]}) => {

  return (
    <div className='md:w-full flex  flex-col md:flex-row justify-between items-center w-[80%] md:border-none border-green-400 border-b border-solid py-4'>
        <Image src={`/images/${i}-ill.jpg`} alt='illustration' width={400}  height={200} className={`order-${orders[1]}`} />
        <div className={`order-${orders[0]} w-72 `}>
            <h2 className='text-2xl'>{info.title}</h2>
            <p className='text-sm text-gray-400 mt-6'>{info.desc}</p>
        </div>
    </div>
  )
}

export default TheImageAndTextThing