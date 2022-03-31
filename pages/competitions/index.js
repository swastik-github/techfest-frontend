import React, { useState } from "react";
import { Card, Modal } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";
import classes from "./competition.module.css";
import clsx from "clsx";
function Competitions() {
  const router = useRouter();
  return (
    <div className={classes.container}>
      <h1 className={classes.h1line}>COMPETITONS</h1>
      <div className={classes.site_card_wrapper}>
        <Card
          onClick={() => router.push("/competitions/technical")}
          bordered={false}
          className={classes.cardss}
        >
          <Image
            width={380}
            height={250}
            src={"/images/coding.jpg"}
            alt="hefd"
          />
          <div className={classes.headLine}>
            <h3> Technical Event </h3>
          </div>
          <div className={classes.explore}>
            <p> Explore </p>
          </div>
        </Card>

        <Card
          onClick={() => router.push("/competitions/sports")}
          bordered={false}
          className={classes.cardss}
        >
          <Image
            width={380}
            height={250}
            src={"/images/playing.jpg"}
            alt="hefd"
          />
          <div className={classes.headLine}>
            <h3> Sport Event </h3>
          </div>
          <div className={classes.explore}>
            <p> Explore </p>
          </div>
        </Card>

        <Card
          onClick={() => router.push("/competitions/cultural")}
          bordered={false}
          className={classes.cardss}
        >
          <Image
            width={380}
            height={250}
            src={"/images/dancing.jpg"}
            alt="hefd"
          />
          <div className={classes.headLine}>
            <h3 style={{marginTop:"15%"}} > CULTURAL/NON-TECH EVENTS </h3>
          </div>
          <div className={classes.explore}>
            <p> Explore </p>
          </div>
        </Card>
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
          <div style={{ height: "101%" }} className={classes.headLine}>
            <h3 style={{ margin: "20% 40px 0" }}>TITLE SPONSORS </h3>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Competitions;
