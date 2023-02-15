import React from 'react';
import axios from 'axios';
import MeetupDetails from '../../components/meetups/MeetupDetails';
import { DUMMY_MEETUPS as meetups } from '../index';

const MeetupDetailsPage = (props) => {
  const meetupData = props.meetupData;
  return (
    <>
      <MeetupDetails
        image={meetupData.image}
        title={meetupData.title}
        description={meetupData.description}
        id={meetupData.id}
        address={meetupData.address}
      />
    </>
  );
};

export default MeetupDetailsPage;

export const getStaticPaths = async () => {
  const response = await axios.get('http://localhost:3000/api/getMeetupId');
  const meetupIds = response.data.meetupIds;
  const paths = meetupIds.map((meetupId) => {
    return { params: { meetupId: meetupId.id } };
  });
  return {
    fallback: false,
    paths: paths,
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  const response = await axios({
    method: 'GET',
    url: 'http://localhost:3000/api/getSingleMeetup',
    params: {
      meetupId: meetupId,
    },
  });
  const meetupData = response.data.meetupId;
  return {
    props: {
      meetupData: meetupData,
    },
  };
};
