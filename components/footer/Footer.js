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
            router.replace("/contributers");
          }}
        >
          contributer
        </p>
      </div>
      <div className={classes.box2}>
        <span>Our Team</span>
        <p>Oriental College of Technology</p>
        <p>oistbpl@oriental.ac.in</p>
        <p>0755-2529026</p>
      </div>
      <div className={classes.box3}>
        <span style={{ marginBottom: "10px" }} className={classes.span}>
          Contact Us
        </span>
        <div className={classes.socialMedia}>
          <a
            href="https://www.instagram.com/techfizz2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={43}
              height={43}
              src={"/images/instagram.png"}
              alt=""
            />
          </a>
          <a
            href="https://www.facebook.com/Techfizz-102511429093163/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image width={43} height={43} src={"/images/facebook.png"} alt="" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Image width={43} height={43} src={"/images/twitter.png"} alt="" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=Y1xGqD_icBY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image width={43} height={43} src={"/images/youtube.png"} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
