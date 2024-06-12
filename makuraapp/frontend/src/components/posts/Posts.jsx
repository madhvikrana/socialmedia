import React from 'react'
import "./posts.scss"
import Post from '../post/Post'

const Posts = () => {

  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Maddy",
      userId: 1,
      profilePic:"https://images.pexels.com/photos/25713558/pexels-photo-25713558/free-photo-of-a-woman-standing-on-a-bridge.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      desc: "A very cute dog swimmimg in the river.",
      img:"https://images.pexels.com/photos/25643362/pexels-photo-25643362/free-photo-of-a-black-dog-with-a-stick-in-its-mouth.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
    },
    {
      id: 2,
      name: "Reezma",
      userId: 2,
      profilePic:"https://images.pexels.com/photos/25016396/pexels-photo-25016396/free-photo-of-a-woman-walking-down-the-runway-with-an-airplane-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
      desc: "A very beautiful yet decent looking flower.",
      img:"https://images.pexels.com/photos/5702289/pexels-photo-5702289.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
    }
  ]
  return (
    <div className='posts'>
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts
