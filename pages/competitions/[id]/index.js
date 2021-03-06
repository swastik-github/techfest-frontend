import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Card, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import classes from "./eventlist.module.css";
import { useAppContext } from "../../../context/state";
import axios from "axios";
function CompetitionDetails() {
  const router = useRouter();
  const { id } = router.query;
  let filteredEventData = [];
  const [eventData, seteventData] = useState([]);
  const [isDisable, setisDisable] = useState(false);
  const values = useAppContext();
  const { setisRegisterVisible } = values.state;
  useEffect(() => {
    if (router.isReady) {
      let eventList = [];
      axios
        .get(`${process.env.NEXT_PUBLIC_FETCH_API}/v1/events`)
        .then((response) => {
          eventList = response?.data?.competitions;
          if (eventList.length > 0) {
            filteredEventData = eventList.filter((item) => {
              return item.competition_genre == id;
            });
            if (filteredEventData.length == 0) {
              return router.push("/404");
            }
            seteventData(filteredEventData[0]);
          } else {
            router.push("/404");
          }
        })
        .catch((err) => {
          handleApiError(err.response);
        });
    }
  }, [router.isReady]);

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
                    style={{
                      borderRadius: "5px 5px 0 0",
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    alt={item.title}
                    src={item.event_img || "/images/pubg.jpeg"}
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
