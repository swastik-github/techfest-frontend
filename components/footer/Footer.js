import { useRouter } from "next/router";
import React from "react";
import classes from "./Footer.module.css";
import Image from "next/image";
const Footer = () => {
  const router = useRouter();
  return (
    <div className={classes.container}>
      <div className={classes.box1}>
        <span>Quick Link</span>
        <p
          onClick={() => {
            router.replace("/");
          }}
        >
          home
        </p>
        <p
          onClick={() => {
            router.replace("/about");
          }}
        >
          about
        </p>
        <p
          onClick={() => {
            router.replace("/contact");
          }}
        >
          contact
        </p>
      </div>
      <div className={classes.box2}>
        <span>Our Team</span>
        <p>Oriental College of Technology</p>
        <p>oistbpl@oriental.ac.in</p>
        <p>0755-2529026</p>
      </div>
      <div className={classes.box3}>
        <span style={{marginBottom:"10px"}} className={classes.span}>Contact Us</span>
        <div className={classes.socialMedia}>
          <Image width={43} height={43} src={"/images/instagram.png"} alt="" />
          <Image width={43} height={43} src={"/images/facebook.png"} alt="" />
          <Image width={43} height={43} src={"/images/twitter.png"} alt="" />
          <Image width={43} height={43} src={"/images/youtube.png"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
