import React from "react";
import "./index.css";
import Profile_picture from "./../../Profile.png";

const Introduction = () => {
  return (
    <div className="introduction">
      <section className="ProfilePicture">
        <img
          src={Profile_picture}
          alt="Profile_picture"
          width="250px"
          height="250px"
          style={{ borderRadius: "50%" }}
        />
      </section>
      <section className="intro">
        <h1 style={{ wordSpacing: "5px", paddingBottom: "10px" }}>
          VASANTA SAI DARAHAS YEEDI
        </h1>
        <h2>Master's Student | BTH</h2>
        <div>
          I am an aspiring Full Stack Developer with strengths in Front end
          Development, UI/UX Design. Prior to this, I am pursuing my Master's
          degree in Telecommunications. I am passionate about learning new
          technologies and expanding my skill set. I am looking for a
          challenging role to prove myself.
        </div>
      </section>
    </div>
  );
};

export default Introduction;
