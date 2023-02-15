import React from 'react';
import NewMeetUpForm from '../../components/meetups/NewMeetUpForm';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

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
      toast.success(response.data.message);
      router.push('/');
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
    <div>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </div>
  );
};

export default NewMeetUpPage;
