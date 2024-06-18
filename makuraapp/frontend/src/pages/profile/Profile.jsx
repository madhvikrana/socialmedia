import React from "react";
import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";


const profile = () => {
  return <div className="Profile">
    <div className="images">
      <img src="https://images.pexels.com/photos/7495924/pexels-photo-7495924.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" className="cover" />
      <img src="https://images.pexels.com/photos/25913490/pexels-photo-25913490/free-photo-of-h.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" className="profilePic" />
    </div>
    <div className="profileContainer">
      <div className="uInfo">
        <div className="left">
          <a href="https://www.facebook.com">
            <FacebookTwoToneIcon fontSize="large" />
          </a>
          <a href="https://www.instagram.com">
            <InstagramIcon fontSize="large" />
          </a>
          <a href="https://x.com/?lang=en">
            <TwitterIcon fontSize="large" />
          </a>
          <a href="https://www.linkedin.com">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="https://www.pinterest.com">
            <PinterestIcon fontSize="large" />
          </a>
        </div>
        <div className="center">
          <span>Madhvi</span>
          <div className="info">
            <div className="item">
              <PlaceIcon/>
              <span>Nepal</span>
            </div>
            <div className="item">
              <LanguageIcon/>
              <span>Rana.dev</span>
            </div>
            <button>follow</button>
          </div>
        </div>
        <div className="right">
          <EmailOutlinedIcon/>
          <MoreVertIcon />
        </div>

      </div>
    </div>
  </div>;
};

export default profile;
