import React, {useState} from "react";
import { Card , Modal} from "antd";
import { useRouter } from "next/router";
import classes from "./competition.module.css";
import clsx from 'clsx';
function Competitions() {
  const router = useRouter();
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
        <img onClick={()=>{setVisible(true)}} className={classes.hamburger} style={{width:'50px', height:'50px'}} src='/images/hamburger.png' />
        {/* <Hamburger/> */}
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
          <p className={classes.modal_item}>Home</p>
          <p className={classes.modal_item}>About</p>
          <p className={classes.modal_item}>Contact</p>
          <p className={classes.register}>
            {" "}
            <span>COMPETITIONS</span>{" "}
          </p>
        </div>
      </Modal>
      <h1 style={{ color: "white", fontSize: "4vw" }}>COMPETITONS</h1>
      <div className={classes.site_card_wrapper}>
        <Card
          onClick={() => router.push("/competitions/technical")}
          bordered={false}
          className={classes.cardss}
        >
          <img src={"/images/coding.jpg"} alt="hefd" />
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
          <img src={"/images/playing.jpg"} alt="hefd" />
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
          <img src={"/images/dancing.jpg"} alt="hefd" />
          <div className={classes.headLine}>
            <h3> CULTURAL/NON-TECH EVENTS </h3>
          </div>
          <div className={classes.explore}>
            <p> Explore </p>
          </div>
        </Card>
      </div>
      <div style={{marginTop:"20px"}} className={classes.site_card_wrapper} >
      <Card bordered={false} className={clsx(classes.cardss, classes.titlesponser) }>
          <img style={{opacity:'0', }} src={"/images/dancing.jpg"} alt="hefd" />
          <div style={{ height: "101%" }} className={classes.headLine}>
            <h3 style={{ margin: "20% 40px 0" }}>TITLE SPONSORS </h3>
          </div>
        </Card>
      </div>
     
    </div>
  );
}

export default Competitions;
