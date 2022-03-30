import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import classes from "./eventdetails.module.css";
import { Button, Image, Modal, Typography } from "antd";
import Footer from "../../../../components/footer/Footer";
import {
  Form,
  Input,
  InputNumber,
  Select,

  Checkbox,

} from "antd";

import eventsdata from "../../../../utilites/eventsdata";
const { Option } = Select;
const { Title, Text } = Typography;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
function CompetitionDetails() {
  const router = useRouter();
  const { event } = router.query;
  const [eventDetails, seteventDetails] = useState({});
  const [visible, setVisible] = useState(false);
  const [navVisible, setnavVisible] = useState(false)
  const [otpVerify, setOtpVerify] = useState({
    otp: null,
    verifed: false,
    phone_no: null,
  });
  let filteredEventData;
  useEffect(async () => {
    if (router.isReady) {
      //   const response = await axios(`http://localhost:1000/events/`);
      filteredEventData = eventsdata.filter((item) => {
        return item._id == event;
      });
      seteventDetails(filteredEventData[0]);
      console.log(filteredEventData);
    }
  }, [router.isReady]);
  function otpVerification() {
    let v = 2342;

    if (v == otpVerify.value) {
      setOtpVerify((prv) => {
        return { ...prv, verifed: true };
      });
    }
  }

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    form.resetFields();
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+91</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className={classes.container} style={{ textAlign: "center" }}>
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
        <img onClick={()=>{setnavVisible(true)}} className={classes.hamburger} style={{width:'30px', height:'30px'}} src='/images/hamburger.png' />
        {/* <Hamburger/> */}
      </div>
      <Modal
        centered
        footer={null}
        visible={navVisible}
        className={classes.nav_modal}
        onOk={() => setnavVisible(false)}
        onCancel={() => setnavVisible(false)}
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
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding:"0 20px" }}>
        <Title style={{ color: "white", fontSize: "40px", margin: "20px auto" ,textTransform:'uppercase' }}>
          Event Details
        </Title>
        <div className={classes.container_box}>
          <div className={classes.img_container} >
            <Image className={classes.event_img}  src="https://picsum.photos/300/400" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Title style={{ margin: "0", fontSize: "60px", color: "white" }}>
                {eventDetails.title}
              </Title>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                textAlign: "start",
              }}
            >
              <Text  style={{color:'white', padding:'10px 0', fontSize:"16px"}} >{eventDetails.descriptions} </Text>
              <Button
                onClick={() => setVisible(true)}
                style={{ margin:"10px 0"}}
                type="primary"
              >
                Register
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <Title style={{ color: "white" }}>Timeline</Title>
              <Title level={3} style={{ color: "white", margin:'0 0 10px' }}>Registration Opening Date:</Title>
              <Text  style={{ color: "white", marginTop:"5px" }} >
                {eventDetails?.timeline?.openingRegistrationDate.toLocaleDateString(
                  "en-US",
                  options
                )}
              </Text>
              <Title level={3} style={{ color: "white", marginTop:"15px" }}>Final Submission Deadline:</Title>
              <Text style={{ color: "white", marginTop:"5px" }} >
                {eventDetails.timeline?.lastRegistrationDate.toLocaleDateString(
                  "en-US",
                  options
                )}
              </Text>
              <Title style={{ color: "white" ,marginTop:"15px" }}>Rules</Title>
              <ul  style={{ listStyletype: "circle", textAlign: "start" }}>
                {eventDetails?.event_rules?.map((item) => {
                  return <li style={{ padding:'5px 0', fontSize:"16px"}} >{item}</li>;
                })}
              </ul>
              <Title style={{ color: "white", marginBottom:"15px" }}>Contact Us</Title>
              <ul style={{display:'flex', flexDirection:'column', alignItems:"start"}}>
                <li style={{color:"white", fontSize:"18px"}} >{eventDetails?.contact?.name}</li>
                <li style={{color:"white", fontSize:"18px"}} >{eventDetails?.contact?.phone_no}</li>
                <li style={{color:"white", fontSize:"18px"}} >{eventDetails?.contact?.email}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Registration"
        centered
        footer={null}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        {/* {!otpVerify.verifed && otpVerify.otp == null  && otpVerify.phone_no == null&& (
          <div
            style={{
              display: "flex",
              margin:"0 auto",
              flexDirection: "column",
              alignItems: "center",
              width: "30%",
            }}
          >
            <Title style={{color:"Black !important", margin:"0" }} >VERIFY </Title>
            <Text type='secondary' >Enter regiter mobile number</Text>
            <Form 
            onFinish={(values)=>{
             setOtpVerify((prv)=>{
               return {...prv, phone_no:values.phone_no}
             })
            }}
            >

           <Form.Item
           name='phone_no'
           >
            <Input placeholder="mobile number" />
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Pay Now
              </Button>
            </Form.Item>
            </Form>
           

          </div>
        )} */}
        {/* {!otpVerify.verifed && !otpVerify.otp && otpVerify.phone_no &&  (
          <div
            style={{
              display: "flex",
              margin:"0 auto",
              flexDirection: "column",
              alignItems: "center",
              width: "30%",
            }}
          >
            <Title style={{color:"Black !important", margin:"0" }} >VERIFY </Title>
            <Text type='secondary' >Enter the otp sent to regiter mobile number {`${(otpVerify?.value)}`}</Text>
            <Input placeholder="OTP" />
            <Button type="primary">VERIFY</Button>
          </div>
        )} */}
        { (
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                residence: ["zhejiang", "hangzhou", "xihu"],
                prefix: "86",
              }}
              scrollToFirstError
            >
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="first_name"
                label="First Name"
                tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="last_name"
                label="Last Name"
                tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="institution"
                label="institution"
                tooltip="your college name"
                rules={[
                  {
                    required: true,
                    message: "Please input your college name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="enrollment_number"
                label="Enrollment number"
                tooltip="your college name"
                rules={[
                  {
                    required: true,
                    message: "Please input your college name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="institution_type"
                label="Institution Type"
                tooltip="your college name"
                rules={[
                  {
                    required: true,
                    message: "Please input your college name!",
                    whitespace: true,
                  },
                ]}
              >
              <Select placeholder="select your gender">
                  <Option value="College">College</Option>
                  <Option value="School">School</Option>
                </Select> 
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                name="age"
                label="age"
                rules={[
                  {
                    required: true,
                    message: "Please input age!",
                    type: "number",
                    min: 0,
                    max: 99,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>

              <Form.Item
                name="intro"
                label="Intro"
                rules={[{ required: true, message: "Please input Intro" }]}
              >
                <Input.TextArea showCount maxLength={100} />
              </Form.Item>

              <Form.Item
                name="gender"
                label="Gender"
                rules={[{ required: true, message: "Please select gender!" }]}
              >
                <Select placeholder="select your gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Should accept agreement")),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>I have read the agreement</Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Pay Now
                </Button>
              </Form.Item>
            </Form>
          )}
      </Modal>
      <Footer />
    </div>
  );
}

export default CompetitionDetails;
