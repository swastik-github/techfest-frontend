import React, { useState } from "react";
import classes from "./header.module.css";
import { Modal, Typography } from "antd";
import { useRouter } from "next/router";

const { Text } = Typography;
export default function Header() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.replace("/");
          }}
          src={"/images/logo.png"}
          className={classes.logo}
          alt=""
        />

        <ul className={classes.navitems}>
          <li
            onClick={() => {
              router.replace("/about");
            }}
            className={classes.items}
          >
            About
          </li>
          <li
            onClick={() => {
              router.replace("/contributers");
            }}
            className={classes.items}
          >
            Contributers
          </li>
          <li
            onClick={() => {
              router.replace("/my-events");
            }}
            className={classes.items}
          >
            My Events
          </li>
          <li
            onClick={() => {
              router.replace("/competitions");
            }}
            className={classes.register}
          >
            {" "}
            <span>COMPETITIONS</span>{" "}
          </li>
        </ul>
        <img
          onClick={() => {
            setVisible(true);
          }}
          className={classes.hamburger}
          src="/images/hamburger.png"
        />
      </div>
      <Modal
        centered
        footer={null}
        visible={visible}
        className={classes.nav_modal}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <div className={classes.modalnav}>
          <Text
            onClick={() => {
              router.replace("/about");
              setVisible(false);
            }}
            className={classes.modal_item}
          >
            ABOUT
          </Text>
          <Text
            onClick={() => {
              router.replace("/my-events");
              setVisible(false);
            }}
            className={classes.modal_item}
          >
            My Events
          </Text>
          <Text
            onClick={() => {
              router.replace("/contributers");
              setVisible(false);
            }}
            className={classes.modal_item}
          >
            CONTRIBUTERS
          </Text>
          <Text
            onClick={() => {
              router.replace("/competitions");
              setVisible(false);
            }}
            className={classes.register}
          >
            {" "}
            <span>COMPETITIONS</span>{" "}
          </Text>
        </div>
      </Modal>
    </div>
  );
}
