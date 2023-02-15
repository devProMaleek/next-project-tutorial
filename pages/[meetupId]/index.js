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

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      { params: { meetupId: 'm1' } },
      { params: { meetupId: 'm2' } },
    ],
  };
}

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Flag_of_the_United_States.svg',
        id: meetupId,
        title: 'A First Meetup',
        address: 'Some Address 5, 12345 Some City',
        description: 'This is a first meetup!',
      },
    },
  };
}
