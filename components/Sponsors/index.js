import React from "react";
import classes from "./sponsors.module.css";
import { Typography } from "antd";
const { Title, Text } = Typography;
function Sponsors() {
  return (
    <div className={classes.sponsors_container}>
      <h1>Sponsors</h1>
      <div style={{ flexDirection: "column" }} className={classes.sponsor_box}>
        <img
          id={classes["high-sponsor"]}
          className={classes.main_sponsors}
          src="/sponsors/s6.jpg"
        />
        <img className={classes.main_sponsors} src="/sponsors/s1.jpeg" />
      </div>

      <h1>Event Sponsors</h1>
      <div className={classes.sponsor_box}>
        <img src="/sponsors/sheryians.png" />
        <img src="/sponsors/s8.png" />
        <img src="/sponsors/s3.png" />
      </div>

      <h1>Food Partners</h1>
      <div id={classes["food-partner"]} className={classes.sponsor_box}>
        <img src="/sponsors/s2.jpeg" />
        <img src="/sponsors/s7.png" />
        <img src="/sponsors/s5.png" />
        <img src="/sponsors/s9.png" />
        <img src="/sponsors/s10.png" />
        <img src="/sponsors/s11.png" />
      </div>
    </div>
  );
}
export default Sponsors;
