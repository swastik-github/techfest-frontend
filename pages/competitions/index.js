import React, { useState, useEffect } from 'react';
import { Card, Modal } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classes from './competition.module.css';
import clsx from 'clsx';
import { useAppContext } from '../../context/state';
function Competitions() {
  const router = useRouter();
  const values = useAppContext();
  const { eventList } = values.state;
  // const [eventList, setEventList] = useState([])
  // useEffect(() => {
  //   setEventList(eventData);
  // }, []);

  return (
    <div className={classes.container}>
      <h1 className="heading">COMPETITONS</h1>
      <div className={classes.site_card_wrapper}>
        <Card
          onClick={() => router.push('/competitions/technical_events')}
          bordered={false}
          className={classes.cardss}
        >
          <Image
            width={380}
            height={250}
            src={'/images/coding.jpg'}
            alt="hefd"
          />
          <div className={classes.headLine}>
            <h3> {eventList[0]?.name} </h3>
            <p> Explore</p>
          </div>
        </Card>

        <Card
          onClick={() => router.push('/competitions/cultural_events')}
          bordered={false}
          className={classes.cardss}
        >
          <Image
            width={380}
            height={250}
            src={'/images/playing.jpg'}
            alt="hefd"
          />
          <div className={classes.headLine}>
            <h3> {eventList[1]?.name} </h3>
            <p> Explore</p>
          </div>
        </Card>

        <Card
          onClick={() => router.push('/competitions/sports_events')}
          bordered={false}
          className={classes.cardss}
        >
          <Image
            width={380}
            height={250}
            src={'/images/dancing.jpg'}
            alt="hefd"
          />
          <div className={classes.headLine}>
            <h3> {eventList[2]?.name} </h3>
            <p> Explore</p>
          </div>
        </Card>
      </div>
      <div style={{ marginTop: '20px' }} className={classes.site_card_wrapper}>
        <Card
          bordered={false}
          className={clsx(classes.cardss, classes.titlesponser)}
        >
          <Image
            width={300}
            height={200}
            style={{ opacity: '0' }}
            src={'/images/dancing.jpg'}
            alt="hefd"
          />
          <div className={classes.headLine}>
            <h3>TITLE SPONSORS </h3>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Competitions;
