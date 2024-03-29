import React from "react";
import classes from "./sponsors.module.css";

function Sponsors() {
  return (
    <div className={classes.sponsors_container}>
      <h1>Sponsors</h1>
      <div style={{ flexDirection: "column" }} className={classes.sponsor_box}>
        <img
          id={classes["high-sponsor"]}
          className={classes.main_sponsors}
          src="/sponsors/s6.png"
        />
        <img className={classes.main_sponsors} src="/sponsors/s1.jpeg" />
        <img className={classes.main_sponsors} src="/sponsors/s19.png" />
      </div>

      <h1>Event Sponsors</h1>
      <div className={classes.sponsor_box}>
        <img id={classes["sheryians"]} src="/sponsors/sheryians.png" />
        <img id={classes["sheryians"]} src="/sponsors/s18.png" />
        <img id={classes["made-easy"]} src="/sponsors/s3.png" />
        <img id={classes["salon"]} src="/sponsors/s12.png" />
        <img id={classes["gym"]} src="/sponsors/s8.png" />
        <img src="/sponsors/s15.png" />
        <img src="/sponsors/s16.png" />
        <img src="/sponsors/s17.png" />
      </div>
      <h1>Food Partners</h1>
      <div id={classes["food-partner"]} className={classes.sponsor_box}>
        <img src="/sponsors/s2.jpeg" />
        <img src="/sponsors/s7.png" />
        <img src="/sponsors/s5.png" />
        <img src="/sponsors/s9.png" />
        <img src="/sponsors/s10.png" />
        <img src="/sponsors/s11.png" />
        <img src="/sponsors/s13.png" />
        <img src="/sponsors/s14.png" />
      </div>
    </div>
  );
}
export default Sponsors;
