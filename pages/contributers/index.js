import React from "react";
import classes from "./contributers.module.css";
import { Avatar } from "antd";
import contributersData from "../../utilites/contributerData";
import { PhoneOutlined, LinkedinOutlined } from "@ant-design/icons";
function Contributers() {
  return (
    <div className={classes.container}>
      <h1 style={{ color: "white", marginTop: "50px", fontSize: "32px" }}>
        COORDINATORS
      </h1>

      <div className={classes.contact_container}>
        {contributersData[1].team.map((item, i) => {
          return (
            <div key={i} className={classes.contact_card}>
              <Avatar
                style={{ width: "100px", height: "100px" }}
                src={item.avatar}
              />
              <h3
                style={{
                  color: "white",
                  marginTop: "50px",
                  margin: "30px 0 10px",
                }}
              >
                {item.name}
              </h3>
              <p>{item.role}</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>{item.contact.email}</p>
                {/* <p>
                  {" "}
                  <PhoneOutlined /> {item.contact.phone_no}
                </p> */}
                <a
                  href={item.contact.linkedin.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <LinkedinOutlined /> {item.contact.linkedin.username}
                  </p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <h1 style={{ color: "white", marginTop: "50px", fontSize: "32px" }}>
        DEVELOPERS
      </h1>

      <div className={classes.contact_container}>
        {contributersData[0].team.map((item, i) => {
          return (
            <div key={i} className={classes.contact_card}>
              <Avatar
                style={{ width: "100px", height: "100px" }}
                src={item.avatar}
              />
              <h3
                style={{
                  color: "white",
                  marginTop: "50px",
                  margin: "30px 0 10px",
                }}
              >
                {item.name}
              </h3>
              <p>{item.role}</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>{item.contact.email}</p>
                {/* <p>
                  {" "}
                  <PhoneOutlined /> {item.contact.phone_no}
                </p> */}
                <a
                  href={item.contact.linkedin.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <LinkedinOutlined /> {item.contact.linkedin.username}
                  </p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <h1 style={{ color: "white", marginTop: "50px", fontSize: "32px" }}>
        DESIGNERS
      </h1>

      <div className={classes.contact_container}>
        {contributersData[2].team.map((item, i) => {
          return (
            <div key={i} className={classes.contact_card}>
              <Avatar
                style={{ width: "100px", height: "100px" }}
                src={item.avatar}
              />
              <h3
                style={{
                  color: "white",
                  marginTop: "50px",
                  margin: "30px 0 10px",
                }}
              >
                {item.name}
              </h3>
              <p>{item.role}</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>{item.contact.email}</p>
                {/* <p>
                  {" "}
                  <PhoneOutlined /> {item.contact.phone_no}
                </p> */}
                <a
                  href={item.contact.linkedin.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <LinkedinOutlined /> {item.contact.linkedin.username}
                  </p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contributers;
