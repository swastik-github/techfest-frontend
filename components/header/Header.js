import React,{useState} from "react";
import classes from "./header.module.css";
import { Modal } from "antd";
import Slider from "../slider/Slider";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter()
  const [visible, setVisible] = useState(false);
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
        <img onClick={()=>{setVisible(true)}} className={classes.hamburger} style={{width:'30px', height:'30px'}} src='/images/hamburger.png' />
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
          <p onClick={()=>{
            router.replace('/')
          }} className={classes.modal_item}>Home</p>
          <p onClick={()=>{
            router.replace('/about')
          }} className={classes.modal_item}>About</p>
          <p onClick={()=>{
            router.replace('/contact')
          }} className={classes.modal_item}>Contact</p>
          <p onClick={()=>{
            router.replace('/competitions')
          }} className={classes.register}>
            {" "}
            <span>COMPETITIONS</span>{" "}
          </p>
        </div>
      </Modal>
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
