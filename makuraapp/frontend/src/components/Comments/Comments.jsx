import React from 'react'
import "./comments.scss"

const Comments = () => {
    //TEMPORARY
    const comments = [
        {
            id: 1,
            desc: "Very cute picture, Lovely!",
            name: "Ram",
            userId: 1,
            profilePicture:"https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=1200"
        },
        {
            id: 2,
            desc: "Lovely!",
            name: "Sita",
            userId: 2,
            profilePicture:"https://images.pexels.com/photos/1572878/pexels-photo-1572878.jpeg?auto=compress&cs=tinysrgb&w=1200"
        }

    ];
  return (
    <div className="comments">{
        comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
        ))
    }</div>
  )
}

export default Comments
