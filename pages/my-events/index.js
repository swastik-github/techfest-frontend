import React, { useState, useEffect } from "react";
import { Input, Typography } from "antd";
import classes from "./myevents.module.css";
import axios from "axios";
import { useAppContext } from "../../context/state";
import { handleApiError } from "../../utilites";
const { Search } = Input;
const { Text, Title } = Typography;
function MyEvents() {
  const [eventList, setEventList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const value = useAppContext();

  const { eventList: eventData } = value.state;
  useEffect(() => {
    if (eventData) {
      setIsLoading(false);
    }
  }, []);

  const onSearch = (value) => {
    setIsLoading(true);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_FETCH_API}/v1/account/registered_events`,
        {
          phone: value,
        }
      )
      .then((response) => {
        let eventIdList = response?.data?.events;
        let filteredSearchEvents = [];
        let idEventLength = eventIdList.length;

        for (let i = 0; i <= 2; i++) {
          if (idEventLength == 0) {
            break;
          }
          eventData[i].events.forEach((event) => {
            return eventIdList.forEach((id) => {
              if (event.event_id == id) {
                idEventLength--;
                return filteredSearchEvents.push(event);
              }
            });
          });
        }
        setEventList(filteredSearchEvents);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err.response);
        setIsLoading(false);
        handleApiError(err.response);
      });

    console.log(eventList, "filterd list");
  };

  return (
    <div className={classes.container}>
      <Search
        style={{ maxWidth: "50%", marginTop: "100px" }}
        className={classes.search_bar}
        placeholder={
          isLoading ? "loading..." : "please enter your registered mobile no."
        }
        disabled={isLoading}
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <div className={classes.event_container}>
        {eventList.map((event) => {
          return (
            <div className={classes.event_box}>
              <div>
                <h1 style={{ margin: "0" }}>{event.event_name}</h1>
                <Text strong style={{ margin: "0 !important" }} type="success">
                  Registered
                </Text>
              </div>

              <p>{event.event_description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyEvents;
