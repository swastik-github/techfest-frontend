import React from "react";
import classes from "./header.module.css";
import Slider from "../slider/Slider";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter()
  return (
    <div className={classes.container}>
      <div className={classes.navbar}>
        <img  onClick={()=>{router.replace('/')}} src={"/images/logo.png"} className={classes.logo} alt="" />

        <ul className={classes.navitems}>
          <li onClick={()=>{
            router.replace('/')
          }} className={classes.items}>Home</li>
          <li onClick={()=>{
            router.replace('/about')
          }} className={classes.items}>About</li>
          <li onClick={()=>{
            router.replace('/contact')
          }} className={classes.items}>Contact</li>
          <li onClick={()=>{
            router.replace('/competitions')
          }} className={classes.register}>
            {" "}
            <span>COMPETITIONS</span>{" "}
          </li>
        </ul>
      </div>
      <div className={classes.container02}>
        <h1>
          Tech Fest <span> 2022-23</span>{" "}
        </h1>
      </div>
      <Slider />
      <div className={classes.sponsors}>
        <h1>Title Sponsors</h1>
      </div>
    </div>
  );
}
