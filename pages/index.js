import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

const index = () => {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
};

export const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup',
  },
  {
    id: 'm3',
    title: 'This is a third meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 15, 12345 Some City',
    description: 'This is a third meetup',
  },
];
