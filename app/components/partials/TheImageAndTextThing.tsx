import React from 'react'
import Image from 'next/image';

type infoType = {
  title: string,
  desc: string
}

const TheImageAndTextThing = ({i, info, orders}: {i: number, info: infoType, orders: array}) => {
  return (
    <div className='w-full flex justify-between items-center '>
        <Image src={`/images/${i}-ill.jpg`} alt='illustration' width={400}  height={200} className={`order-${orders[1]}`} />
        <div className={`order-${orders[0]} w-72 `}>
            <h2 className='text-2xl'>{info.title}</h2>
            <p className='text-sm text-gray-400 mt-6'>{info.desc}</p>
        </div>
    </div>
  )
}

export default TheImageAndTextThing