import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Card, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import classes from "./eventlist.module.css";
import { useAppContext } from "../../../context/state";
function CompetitionDetails() {
  const router = useRouter();
  const { id } = router.query;
  let filteredEventData = [];
  const [eventData, seteventData] = useState([]);
  const value = useAppContext();
  const { setisRegisterVisible, eventList } = value.state;
  useEffect(() => {
    if (router.isReady) {
      console.log(eventList, "data");
      if (eventList) {
        filteredEventData = eventList.filter((item) => {
          return item.competition_genre == id;
        });
        console.log(eventList, "event data");
        console.log(filteredEventData);
        if (filteredEventData.length == 0) {
          console.log(filteredEventData.length == 0, "really");
          // return router.push("/404");
        }
      }

      seteventData(filteredEventData[0]);
    }
  }, [router.isReady, eventList]);

  return (
    <div className={classes.container} style={{ textAlign: "center" }}>
      <h1
        style={{ color: "white", textTransform: "uppercase", fontSize: "40px" }}
      >
        {eventData?.name}
      </h1>
      <div className={classes.event_list}>
        {eventData.length == 0 ? (
          <Spin
            indicator={
              <LoadingOutlined
                size="large"
                style={{ fontSize: 42, color: "white" }}
                spin
              />
            }
          />
        ) : (
          eventData?.events?.map((item, i) => {
            return (
              <Card
                key={i}
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
                  <h3> {item.event_name} </h3>
                  <p
                    className={classes.descriptions}
                    style={{ fontSize: "14px", textTransform: "lowercase" }}
                  >
                    {item.event_description}
                  </p>
                </div>

                <div style={{ cursor: "pointer" }} className={classes.explore}>
                  <div
                    onClick={() => {
                      setisRegisterVisible(true);
                      router.push(
                        `/competitions/[id]/[event]`,
                        `/competitions/${id}/${item.event_id}`
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
                        `/competitions/${id}/${item.event_id}`
                      );
                    }}
                  >
                    <p>explore</p>
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
}

export default CompetitionDetails;
