import React, {useState} from 'react'

function LikesButtons({data}) {

    const [isUpvote, setIsUpvote] = useState(data.upvotes)
    const [isDownvote, setIsDownvote] = useState(data.downvotes)
  
    const handleUpvote = () => {
        setIsUpvote(isUpvote + 1)
    }
  
    const handleDownvote = () => {
        setIsDownvote(isDownvote + 1)
    }
  

  return (
    <div>
        <button onClick={handleUpvote} className='upvote'>Likes: {isUpvote}</button>
        <button onClick={handleDownvote} className='downvote'>Dislikes: {isDownvote}</button>

    </div>
  )
}

export default LikesButtons