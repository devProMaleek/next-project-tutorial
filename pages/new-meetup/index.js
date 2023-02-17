import React from 'react';
import NewMeetUpForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Head from 'next/head';

const NewMeetUpPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetupData) => {
    toast.loading('Creating a meetup');
    try {
      const response = await axios({
        method: 'POST',
        url: '/api/createNewMeetup',
        data: meetupData,
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response);
      toast.dismiss();
      if (response.status === 201) {
        toast.success(response.data.message);
        router.push('/');
      }
    } catch (error) {
      toast.dismiss();
      if (error.response) {
        toast.error(error.response.data.message);
        console.log(error.response.data);
        console.log(error.response.status);
      } else {
        console.log(error.message);
      }
    } finally {
      toast.dismiss();
    }
  };
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta author="devProMaleek" />
      </Head>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetUpPage;
