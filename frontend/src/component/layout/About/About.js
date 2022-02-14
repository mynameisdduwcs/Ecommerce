import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/142445378_2844110412495978_7046082702129714327_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=a4a2d7&_nc_ohc=_UFqkd0WDCwAX-1QqQF&tn=Y1e9NWXGzJhNrMzz&_nc_ht=scontent.fhan2-4.fna&oh=00_AT-Iyakt9C3SBaUP15DUApPNwT9mbpZRN2kmVoyJnXlTkw&oe=62314831"
              alt="Founder"
            />
            <Typography>ADC</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>

            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
