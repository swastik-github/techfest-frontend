import React from "react";
import classes from "./sponsors.module.css";
import { Typography } from "antd";
const { Title, Text } = Typography;
function Sponsors() {
  return (
    <div className={classes.sponsors_container}>
      <h1>Sponsors</h1>
      <div className={classes.sponsor_box}>
        <img src="/sponsors/s1.jpeg" />
      </div>

      <h1>Event Sponsors</h1>
      <div className={classes.sponsor_box}>
        <img src="/sponsors/sheryians.png" />
        <img src="/sponsors/s3.png" />
      </div>

      <h1>Food Partners</h1>
      <div className={classes.sponsor_box}>
        <img src="/sponsors/s2.jpeg" />
      </div>
    </div>
  );
}
export default Sponsors;
