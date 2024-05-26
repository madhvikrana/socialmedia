import React from 'react'
import "./leftbar.scss"
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";



const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className='container'>
        <div className="menu">
          <div className="user">
            <img
            src="https://images.pexels.com/photos/15578747/pexels-photo-15578747/free-photo-of-sneaking-cat-on-the-meadow.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt=""
            />
            <span> Maddy </span>
          </div>
          <div className="item">
            <img src="" alt="" />
            <span>Friends</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LeftBar
