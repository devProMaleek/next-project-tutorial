import React from 'react';
import MeetupDetails from '../../components/meetups/MeetupDetails';
import { DUMMY_MEETUPS as meetups } from '../index';

const MeetupDetailsPage = () => {
  const meetup = meetups.find((meetup) => meetup.id === 'm1');
  console.log(meetup);
  return (
    <>
      <MeetupDetails image={meetup.image} title={meetup.title} description= {meetup.description} id={meetup.id} address={meetup.address} />
    </>
  );
};

export default MeetupDetailsPage;
