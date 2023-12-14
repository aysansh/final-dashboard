import React from 'react'
import FeedLikeAndShare from './FeedLikeAndShare'
import FeedLikes from './FeedLikes'
import FeedComentBox from './FeedComentBox'

function FeedSocial() {
  return (
    <div className='flex flex-col gap-6 text-[#475569]'>
      <FeedLikeAndShare/>
      <FeedLikes/>
      <FeedComentBox/>
    </div>
  )
}

export default FeedSocial