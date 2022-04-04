import React from "react";
import classes from "./about.module.css";
import Slider from "../slider/Slider";
function Index() {
  return (
    <>
      <Slider />
      <div className={classes.about}>
        <div className={classes.about_content}>
          <div className={classes.content_heading}>About</div>
          <p className={classes.para}>
            The greatness of a techno-culture can be found in it's college's
            fest. Oriental College of technology embraces it's 20 year old
            legacy and brings to you the biggest and leading techno-culture
            events in the entire middle India 'Techfizz 2K22'. Bringing in a
            wide variety of technical, non-technical, cultural and sports
            events. So let's walk an extra mile, participate and mark yourself
            to stand out in the crowd. The greatness of a techno-culture can be
            found in it's college's fest. Oriental College of technology
            embraces it's 20 year old legacy and brings to you the biggest and
            leading techno-culture events in the entire middle India 'Techfizz
            2K22'. Bringing in a wide variety of technical, non-technical,
            cultural and sports events. So let's walk an extra mile, participate
            and mark yourself to stand out in the crowd.
          </p>
        </div>
      </div>
    </>
  );
}

export default Index;
