import React, { useState, useEffect } from "react";
import { Card, Modal, Image, Spin } from "antd";
import { useRouter } from "next/router";
import classes from "./competition.module.css";
import clsx from "clsx";
import { LoadingOutlined } from "@ant-design/icons";
import { useAppContext } from "../../context/state";
function Competitions() {
  const router = useRouter();
  const values = useAppContext();
  const { eventList } = values.state;

  return (
    <div className={classes.container}>
      <h1 className="heading">COMPETITONS</h1>
      <div className={classes.site_card_wrapper}>
        {eventList.length == 0 ? (
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
          eventList?.map((ev, i) => (
            <Card
              key={i}
              onClick={() =>
                router.push(`/competitions/${ev?.competition_genre}`)
              }
              bordered={false}
              className={classes.cardss}
            >
              <Image
                width={380}
                height={250}
                src={"/images/coding.jpg"}
                alt={ev?.name}
              />
              <div className={classes.headLine}>
                <h3> {ev?.name} </h3>
                <p> Explore</p>
              </div>
            </Card>
          ))
        )}
      </div>
      <div style={{ marginTop: "20px" }} className={classes.site_card_wrapper}>
        <Card
          bordered={false}
          className={clsx(classes.cardss, classes.titlesponser)}
        >
          <Image
            width={300}
            height={200}
            style={{ opacity: "0" }}
            src={"/images/dancing.jpg"}
            alt="hefd"
          />
          <div className={classes.headLine}>
            <h3>TITLE SPONSORS </h3>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Competitions;
