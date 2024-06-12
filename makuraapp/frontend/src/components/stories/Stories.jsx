import React, { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Madhvi",
      img: "https://images.pexels.com/photos/25194063/pexels-photo-25194063/free-photo-of-woman-in-a-white-waistcoat-and-creased-trousers-lying-on-a-chair-with-a-leaflet-on-her-face.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    },
    {
      id: 2,
      name: "Narayan",
      img: "https://images.pexels.com/photos/6284716/pexels-photo-6284716.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    },
    {
      id: 3,
      name: "Hreeshav",
      img: "https://images.pexels.com/photos/22944577/pexels-photo-22944577/free-photo-of-black-and-white-photo-of-palm-trees-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    },
    {
      id: 4,
      name: "Bhanu",
      img: "https://images.pexels.com/photos/18114984/pexels-photo-18114984/free-photo-of-buck-with-antlers.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div> 
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
