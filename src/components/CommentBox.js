import React, { useState } from 'react'
import Comment from "./Comment.js"
// import LikesButtons from './LikesButtons'

function CommentBox({ commentArr }) {
const [filteredComments, setFitleredComments] = useState(commentArr)
    console.log(commentArr)
    const handleChange = (e) => {
        // console.log(e.target.value)
        let searchResult = commentArr.filter(item => {
            // console.log(item.user)
            return item.user.toLowerCase().includes(e.target.value) ? item : null
        })
        setFitleredComments(searchResult)
    }

    const renderComments = filteredComments.map((item, index) => <Comment key={index} item={item}/>)

        return (
        <div>
            <input
                type="text"
                placeholder="Search a user"
                onChange={handleChange}
            />
            <h2>{commentArr.length} User Comments</h2>
            {renderComments}
        </div>
        )
}

        export default CommentBox


                /* <LikesButtons /> */ 

