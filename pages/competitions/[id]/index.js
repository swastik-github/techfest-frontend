import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Card, Divider, Modal } from "antd";
import eventData from "../../../utilites/eventsdata";
import classes from "./eventlist.module.css";
import { useAppContext } from "../../../context/state";
function CompetitionDetails() {
  const router = useRouter();
  const { id } = router.query;
  let filteredEventData;
  const [eventList, seteventList] = useState([]);
  const value = useAppContext();
  let { setisRegisterVisible } = value.state;
  useEffect(() => {
    if (router.isReady) {
      //   const response = await axios(`http://localhost:1000/competitions/${id}`);
      filteredEventData = eventData.filter((item) => {
        return item.event_type == id;
      });
      seteventList(filteredEventData);
    }
  }, [router.isReady]);

  return (
    <div className={classes.container} style={{ textAlign: "center" }}>
      <h1
        style={{ color: "white", textTransform: "uppercase", fontSize: "40px" }}
      >
        {router.query.id} Events
      </h1>
      <div className={classes.event_list}>
        {eventList &&
          eventList.map((item) => {
            return (
              <Card
                className={"event_cards"}
                style={{
                  borderRadius: "5px",
                  width: "280px",
                  height: "320px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                }}
                cover={
                  <img
                    style={{ borderRadius: "5px" }}
                    alt={item.title}
                    src="https://picsum.photos/280/300"
                  />
                }
              >
                <div className={classes.blurBackground}></div>

                <div style={{ padding: "10px" }} className={classes.headLine}>
                  <h3> {item.title} </h3>
                  <p
                    className={classes.descriptions}
                    style={{ fontSize: "14px", textTransform: "lowercase" }}
                  >
                    {item.descriptions}
                  </p>
                </div>

                <div style={{ cursor: "pointer" }} className={classes.explore}>
                  <div
                    onClick={() => {
                      setisRegisterVisible(true);
                      router.push(
                        `/competitions/[id]/[event]`,
                        `/competitions/${id}/${item._id}`
                      );
                    }}
                    className={classes.register_btn}
                    style={{
                      width: "100%",
                      height: "40px",
                      fontSize: "22px",
                    }}
                  >
                    <p>register</p>
                  </div>
                  <div
                    className={classes.explore_btn}
                    style={{
                      width: "100%",
                      height: "40px",
                      fontSize: "22px",
                    }}
                    onClick={() => {
                      router.push(
                        `/competitions/[id]/[event]`,
                        `/competitions/${id}/${item._id}`
                      );
                    }}
                  >
                    <p>explore</p>
                  </div>
                </div>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default CompetitionDetails;
