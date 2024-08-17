import React from "react";

export const HeroVideo = () => {
  return (
    <video
      className="w-[1150px] my-[50px]"
      src="https://res.cloudinary.com/zapier-media/video/upload/f_auto,q_auto/v1706042175/Homepage%20ZAP%20Jan%2024/012324_Homepage_Hero1_1920x1080_pwkvu4.mp4"
      muted={true}
      autoPlay={true}
      controls={false}
      loop={true}
    ></video>
  );
};
