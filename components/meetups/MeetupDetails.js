import React from 'react';
import classes from './MeetupDetails.module.css';
import { useRouter } from 'next/router';

const MeetupDetails = (props) => {
  const router = useRouter();
  return (
    <>
      <section className={classes.detail}>
        <img src={props.image} alt={props.title} />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
      <div className={classes.actions}>
        <button onClick={() => router.push('/')}>Back to Home</button>
      </div>
    </>
  );
};

export default MeetupDetails;
