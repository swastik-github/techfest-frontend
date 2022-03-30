import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Card, Divider, Modal } from "antd";
import Footer from "../../../components/footer/Footer";
import eventData from "../../../utilites/eventsdata";
import classes from "./eventlist.module.css";
function CompetitionDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [visible, setVisible] = useState(false);
  let filteredEventData;
  const [eventList, seteventList] = useState([]);
  useEffect(() => {
    if (router.isReady) {
      //   const response = await axios(`http://localhost:1000/competitions/${id}`);
      filteredEventData = eventData.filter((item) => {
        return item.event_type == id;
      });
      seteventList(filteredEventData);
    }
  }, [router.isReady]);

  return (
    <div className={classes.container} style={{ textAlign: "center" }}>
      <div className={classes.navbar}>
        <img onClick={()=>{router.replace('/')}} src={"/images/logo.png"} className={classes.logo} alt="" />

        <ul className={classes.navitems}>
          <li onClick={()=>{
            router.replace('/')
          }} className={classes.items}>Home</li>
          <li onClick={()=>{
            router.replace('/about')
          }} className={classes.items}>About</li>
          <li onClick={()=>{
            router.replace('contact')
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
            router.replace('/competitons')
          }} className={classes.register}>
            {" "}
            <span>COMPETITIONS</span>{" "}
          </p>
        </div>
      </Modal>
      <h1
        style={{ color: "white", textTransform: "uppercase", fontSize: "54px" }}
      >
        {router.query.id} Events
      </h1>
      <div className={classes.event_list}>
        {eventList &&
          eventList.map((item) => {
            return (
              <Card
                className={"event_cards"}
                style={{
                  borderRadius: "5px",
                  width: "280px",
                  height: "320px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                }}
                cover={
                  <img
                    style={{ borderRadius: "5px" }}
                    alt={item.title}
                    src="https://picsum.photos/280/300"
                  />
                }
              >
                <div className={classes.blurBackground}></div>

                <div style={{ padding: "10px" }} className={classes.headLine}>
                  <h3> {item.title} </h3>
                  <p
                    className={classes.descriptions}
                    style={{ fontSize: "14px", textTransform: "lowercase" }}
                  >
                    {item.descriptions}
                  </p>
                </div>

                <div style={{ cursor: "pointer" }} className={classes.explore}>
                  <div
                    onClick={() => {
                      // router.push(`/competitons/${id}/${item._id}`);
                    }}
                    className={classes.register_btn}
                    style={{
                      width: "100%",
                      height: "40px",
                      fontSize: "22px",
                    }}
                  >
                    <p>register</p>
                  </div>
                  <div
                  className={classes.explore_btn}
                    style={{
                      width: "100%",
                      height: "40px",
                      fontSize: "22px",
                    }}
                    onClick={() => {
                      router.push(
                        `/competitions/[id]/[event]`,
                        `/competitions/${id}/${item._id}`
                      );
                    }}
                  >
                    <p>explore</p>
                  </div>
                </div>
              </Card>
            );
          })}
      </div>
      <Footer />
      
    </div>
  );
}

export default CompetitionDetails;
