import React from 'react'
import NewMeetUpForm from '../../components/meetups/NewMeetUpForm'

const NewMeetUpPage = () => {
  const addMeetupHandler = (meetupData) => {
    console.log(meetupData)
  }
  return (
    <div>
      <NewMeetUpForm onAddMeetup={addMeetupHandler} />
    </div>
  )
}

export default NewMeetUpPage
