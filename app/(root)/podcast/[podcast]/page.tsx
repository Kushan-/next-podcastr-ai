import React from 'react'

const PodcastDetails = ({params}: {parmas : {podcastId: string}}) => {
  return (
    <p className='text-white-1'>
        PostcastDetails for {params.productId}
    </p>
  )
}

export default PodcastDetails