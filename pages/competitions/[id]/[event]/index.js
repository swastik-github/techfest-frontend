import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import classes from "./eventdetails.module.css";
import { Button, Modal, Typography, message, Spin } from "antd";
import { useAppContext } from "../../../../context/state";
import {
  CheckCircleTwoTone,
  CloseCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Form, Input, InputNumber, Select } from "antd";
import axios from "axios";
import { handleApiError } from "../../../../utilites";
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
  const { event, id } = router.query;
  const value = useAppContext();
  let { isRegisterVisible, setisRegisterVisible } = value.state;
  const [isPaymentDone, setIsPaymentDone] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({});
  const initalRegisterValue = isRegisterVisible;
  const [eventDetails, seteventDetails] = useState(null);
  const [activeDetails, setActiveDetails] = useState("about");
  const [visible, setVisible] = useState(initalRegisterValue);

  const errorMessage = (err) => {
    return message.error(err, 10);
    // return <Alert message="Error" description={err} type="error" showIcon />;
  };
  useEffect(() => {
    setisRegisterVisible(false);
  }, []);
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  useEffect(async () => {
    if (router.isReady) {
      let eventList = [];
      let filterdEvents = [];
      axios
        .get(`${process.env.NEXT_PUBLIC_FETCH_API}/v1/events`)
        .then((response) => {
          eventList = response?.data?.competitions;

          if (eventList.length > 0) {
            filterdEvents = eventList?.filter((item) => {
              return item.competition_genre == id;
            });

            if (filterdEvents.length == 0) {
              return router.push("/404");
            }
          } else {
            router.push("/404");
          }

          let filterdEventsDetails = [];
          if (filterdEvents.length > 0) {
            filterdEventsDetails = filterdEvents[0]?.events?.filter((item) => {
              return item.event_id == event;
            });
            if (filterdEventsDetails.length == 0) {
              router.push("/404");
            }
          } else {
            router.push("/404");
          }
          seteventDetails(filterdEventsDetails?.[0]);
        })
        .catch((err) => {
          handleApiError(err.response);
        });
    }
  }, [router.isReady]);

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    let result;
    try {
      result = await axios.post(
        `${process.env.NEXT_PUBLIC_FETCH_API}/v1/account/register/${id}/${event}`,
        values
      );
    } catch (err) {
      handleApiError(err.response);
      return;
    }

    // if (!result) {
    //   alert("Server error. Are you online?");
    //   return;
    // }
    const { amount, id: order_id, currency } = result.data.rzp;

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_API, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "TechFizz",
      description: eventDetails.event_name,
      // image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };

        let result;
        try {
          result = await axios.post(
            `${process.env.NEXT_PUBLIC_FETCH_API}/v1/events/payment`,
            data
          );
        } catch (error) {
          setPaymentDetails(error.response);
          setIsPaymentDone(true);
          handleApiError(error.response);
          return;
        }
        setPaymentDetails(result.data);
        setIsPaymentDone(true);
        // alert(result.data.msg);
      },
      prefill: {
        name: values.first_name + " " + values.last_name,
        email: values.email,
        contact: values.phone,
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    form.resetFields();
    setVisible(false);
    paymentObject.open();
  };

  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <Select style={{ width: 70 }}>
  //       <Option value="86"></Option>
  //     </Select>
  //   </Form.Item>
  // );

  return (
    <div className={classes.container}>
      {eventDetails !== null ? (
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div className={classes.container_box}>
            <div className={classes.img_container}>
              <img src="https://images.unsplash.com/photo-1580830488699-3f7472613b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
              <Button
                onClick={() => setVisible(true)}
                style={{
                  margin: "10px 0",
                  backgroundColor: "purple",
                  border: "none",
                  fontSize: "16px",
                }}
                type="primary"
              >
                Register
              </Button>
            </div>
            <div className={classes.eventdetail_container}>
              <Title style={{ margin: "0", fontSize: "40px", color: "white" }}>
                {eventDetails?.event_name}
                <p style={{ margin: "0", fontSize: "16px", fontWeight: "400" }}>
                  Price: {eventDetails?.event_price}
                </p>
              </Title>

              <div className={classes.eventdetail_headlines}>
                <span
                  style={{
                    cursor: "pointer",
                    color: activeDetails == "about" ? "white" : "gray",
                  }}
                  onClick={() => {
                    setActiveDetails("about");
                  }}
                >
                  About
                </span>
                <span
                  style={{
                    cursor: "pointer",
                    color: activeDetails == "timeline" ? "white" : "gray",
                  }}
                  onClick={() => {
                    setActiveDetails("timeline");
                  }}
                >
                  Timeline
                </span>
                <span
                  style={{
                    cursor: "pointer",
                    color: activeDetails == "rules" ? "white" : "gray",
                  }}
                  onClick={() => {
                    setActiveDetails("rules");
                  }}
                >
                  Rules
                </span>
                <span
                  style={{
                    cursor: "pointer",
                    color: activeDetails == "contact" ? "white" : "gray",
                  }}
                  onClick={() => {
                    setActiveDetails("contact");
                  }}
                >
                  Contact Us
                </span>
              </div>
              {activeDetails == "about" && (
                <div className={classes.eventdetails_details}>
                  {eventDetails?.event_venue?.map((item, i) => {
                    return (
                      <div key={i}>
                        <p style={{ marginBottom: "8px" }}>
                          {item.timing} {item.date}
                        </p>
                        <p style={{ marginBottom: "8px" }}>{item.place}</p>
                      </div>
                    );
                  })}
                  <p>{eventDetails?.event_description}</p>
                </div>
              )}
              {activeDetails == "timeline" && (
                <div className={classes.eventdetails_details}>
                  <Title
                    level={5}
                    style={{ color: "white", margin: "0 0 10px" }}
                  >
                    Registration Opening Date:
                  </Title>
                  <Text style={{ color: "white", marginTop: "5px" }}>
                    {new Date(2022, 3, 4).toLocaleDateString("en-US", options)}
                  </Text>
                  <Title
                    level={5}
                    style={{ color: "white", marginTop: "15px" }}
                  >
                    Final Submission Deadline:
                  </Title>
                  <Text style={{ color: "white", marginTop: "5px" }}>
                    {new Date(2022, 3, 21).toLocaleDateString("en-US", options)}
                  </Text>
                </div>
              )}
              {activeDetails == "rules" && (
                <div className={classes.eventdetails_details}>
                  <ul style={{ listStyletype: "circle" }}>
                    {eventDetails?.event_rules?.map((item, i) => {
                      return (
                        <li
                          key={i}
                          style={{ padding: "5px 0", fontSize: "15px" }}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              {activeDetails == "contact" && (
                <div className={classes.eventdetails_details}>
                  {eventDetails?.contact?.map((item, i) => {
                    return (
                      <div key={i}>
                        <p
                          style={{
                            color: "white",
                            fontSize: "16px",
                            marginBottom: "8px",
                          }}
                        >
                          {item?.name}
                        </p>
                        <p
                          style={{
                            color: "white",
                            fontSize: "16px",
                            marginBottom: "8px",
                          }}
                        >
                          {item?.phone_no}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Spin
            indicator={
              <LoadingOutlined
                size="large"
                style={{ fontSize: 42, color: "white" }}
                spin
              />
            }
          />
        </div>
      )}
      <Modal
        title={
          <Title level={2} style={{ color: "white", margin: "0" }}>
            Registration
          </Title>
        }
        centered
        className="registration_modal"
        bodyStyle={{ backgroundColor: "rgb(34, 34, 34)", color: "white" }}
        footer={null}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        {
          <Form
            className="registration_form"
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
              label={<label style={{}}>E-mail</label>}
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
              label={<label style={{}}>First Name</label>}
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
              label={<label style={{}}>Last Name</label>}
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
              label={<label style={{}}>Last Name</label>}
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
              name="event_type"
              label={<label style={{}}>Participates</label>}
              tooltip="no. of people participating"
              rules={[
                {
                  required: true,
                  message: "Please input your participating type!",
                },
              ]}
            >
              <Select placeholder="select your partipate type">
                <Option value="College">Solo</Option>
                <Option value="School">Duo</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="institution"
              label={<label>Institution</label>}
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
              label={<label style={{}}>Enrollment number</label>}
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
              label={<label style={{}}>Institution Type</label>}
              tooltip="your college name"
              rules={[
                {
                  required: true,
                  message: "Please input your college name!",
                  whitespace: true,
                },
              ]}
            >
              <Select
                // dropdownClassName="ant-dropdown"
                placeholder="select your institution type"
              >
                <Option value="College">College</Option>
                <Option value="School">School</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="phone"
              label={<label style={{}}>Phone Number</label>}
              rules={[
                {
                  required: true,
                  validator: async (_, phone) => {
                    if (phone.length !== 10) {
                      return Promise.reject(
                        new Error("Phone number must be 10 digit")
                      );
                    }
                  },
                },
              ]}
            >
              <Input
                addonBefore={<p style={{ color: "white", margin: "0" }}>+91</p>}
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item
              name="age"
              label={<label style={{}}>Age</label>}
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

            {/* <Form.Item
              name="intro"
              label="Intro"
              rules={[{ required: true, message: "Please input Intro" }]}
            >
              <Input.TextArea showCount maxLength={100} />
            </Form.Item> */}

            <Form.Item
              name="gender"
              label={<label style={{}}>Gender</label>}
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select
                // dropdownClassName="ant-dropdown"
                placeholder="select your gender"
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button
                style={{ backgroundColor: "purple", border: "none" }}
                type="primary"
                htmlType="submit"
              >
                Pay Now
              </Button>
            </Form.Item>
          </Form>
        }
      </Modal>
      <Modal
        title={
          <Title level={2} style={{ color: "white", margin: "0" }}>
            Payment
          </Title>
        }
        centered
        bodyStyle={{
          backgroundColor: "rgb(34, 34, 34)",
          color: "white",
        }}
        footer={null}
        width={1000}
        visible={isPaymentDone}
        onOk={() => setIsPaymentDone(false)}
        onCancel={() => setIsPaymentDone(false)}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text type="warning">Take a screenshot for safety</Text>
          {paymentDetails.status == "success" ? (
            <CheckCircleTwoTone
              style={{ fontSize: "100px" }}
              twoToneColor="#52c41a"
            />
          ) : (
            <CloseCircleOutlined
              style={{ fontSize: "100px" }}
              twoToneColor="red"
            />
          )}
          <Title style={{ color: "white" }}>{paymentDetails.status}</Title>
          <Text
            type={paymentDetails.status == "success" ? "success" : "danger"}
          >
            {" "}
            <Text strong>Order ID:</Text> {paymentDetails.order_id}
          </Text>
          <Text
            type={paymentDetails.status == "success" ? "success" : "danger"}
          >
            {" "}
            <Text strong>Transition ID:</Text> {paymentDetails.transaction_id}
          </Text>
        </div>
      </Modal>
    </div>
  );
}

export default CompetitionDetails;
