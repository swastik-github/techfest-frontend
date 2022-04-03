import { useRouter } from 'next/router';
import React from 'react';
import classes from './Footer.module.css';
import Image from 'next/image';
const Footer = () => {
  const router = useRouter();
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <h3>Quick Link</h3>
        <a
          onClick={() => {
            router.replace('/');
          }}
        >
          Home
        </a>
        <a
          onClick={() => {
            router.replace('/about');
          }}
        >
          About
        </a>
        <a
          onClick={() => {
            router.replace('/contributers');
          }}
        >
          Contributer
        </a>
      </div>
      <div className={classes.box}>
        <h3>Our Team</h3>
        <p>Oriental College of Technology</p>
        <p>oistbpl@oriental.ac.in</p>
        <p>0755-2529026</p>
      </div>
      <div className={classes.box}>
        <h3>Contact Us</h3>
        <div className={classes.socialMedia}>
          <a
            href="https://www.instagram.com/techfizz2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={43}
              height={43}
              src={'/images/instagram.png'}
              alt=""
            />
          </a>
          <a
            href="https://www.facebook.com/Techfizz-102511429093163/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image width={43} height={43} src={'/images/facebook.png'} alt="" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <Image width={43} height={43} src={'/images/twitter.png'} alt="" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=Y1xGqD_icBY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image width={43} height={43} src={'/images/youtube.png'} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
