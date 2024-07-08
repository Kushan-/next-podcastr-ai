import Image from 'next/image'
import React from 'react'

const PodCastCard = ( {podcastId, title, description, imgURL}: {
    imgURL : string,
    title: string,
    description: string,
    podcastId: number
}) => {
  return (
    <div className='cursor-pointer'>
        <figure className='flex flex-col gap-2'>
            <Image
                src={imgURL}
                width={175}
                height={175}
                alt={title}
                 
            />
            <div>
                <h1 className='text-16 truncate
                font-bold text-white-1
                '>

                </h1>
            </div>
        </figure>
        PodCastCard
    </div>
  )
}

export default PodCastCard