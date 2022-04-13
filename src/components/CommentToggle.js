import React, {useState} from 'react'
import CommentBox from "./CommentBox"

function CommentToggle({data}) {
    console.log(data)
    const [isCommentShown, setIsCommentShown] = useState(false)

    const handleToggle = () => {
        setIsCommentShown(isCommentShown => !isCommentShown)
    }
    // console.log(isCommentShown)

    const text = isCommentShown ? "Hide" : "Show"

    const showBox = isCommentShown ? <CommentBox commentArr={data.comments}/> : null

  return (
    <div>
        <button onClick={handleToggle} className='toggleComment'>{text} Comments</button>
        {showBox}
    </div>
  )
}

export default CommentToggle