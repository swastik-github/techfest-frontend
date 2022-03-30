import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import {MenuUnfoldOutlined} from '@ant-design/icons'
const Hamburger = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <>
    
   <img style={{width:'50px', height:'50px'}} src='/images/hamburger.png' />
    
    
    </>
  );
};
export default Hamburger;
