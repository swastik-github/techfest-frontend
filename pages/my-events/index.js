import React, { useState, useEffect } from "react";
import { Input } from "antd";
import classes from "./myevents.module.css";
import axios from "axios";
import eventData from "../../utilites/eventsdata";
const { Search } = Input;

function MyEvents() {
  const [searchValue, setSearchValue] = useState("");
  const [eventList, setEventList] = useState([])
  const onSearch = (value) => {
    setSearchValue(value);
  };
  useEffect(async () => {
    // const response = await axios('')
    // console.log(response)
    let filterdEvents = eventData.filter((item)=>{
        item.title == searchValue
    })
  }, [searchValue]);

  return (
    <div className={classes.container}>
      <Search
        style={{ maxWidth: '50%', marginTop:"100px" }}
        className={classes.search_bar}
        placeholder="please enter your registered enrollment no."
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </div>
  );
}

export default MyEvents;
