import React from 'react';
import axios from 'axios';
import MeetupDetails from '../../components/meetups/MeetupDetails';
import Head from 'next/head';

const MeetupDetailsPage = (props) => {
  const meetupData = props.meetupData;
  return (
    <>
    <Head>
        <title>{meetupData.title}</title>
        <meta name="description" content={meetupData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta author="devProMaleek" />
      </Head>
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
