import { Button } from '@/components/ui/button'
import React from 'react'
import { podcastData } from '../../constants'
import PodCastCard from '../../components/PodCastCard'

const Home = () => {
  return (
    <div className='mt-9 flex flex-col gap-9'>
        <section className='flex flex-col gap-5'>
            <h1 className='text-20 font-bold text-white-1'>
                Trending Podcast
            </h1>
            <div>
            {podcastData.map( ( {id, imgURL, title, description} )=>(
                <PodCastCard
                    key={id}
                    imgURL={imgURL}
                    description={description}
                    title={title}
                    podcastId={id}
                />
            )
                
            )}
            </div>
            
        </section>
    </div>
  )
}

export default Home