import React from 'react'
import MeetupList from '../components/meetups/MeetupList'

const index = () => {
  const DUMMY_MEETUPS = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/600px-Netflix-avatar.png',
      address: 'Some address 5, 12345 Some City',
      description: 'This is a first meetup',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/600px-Netflix-avatar.png',
      address: 'Some address 10, 12345 Some City',
      description: 'This is a second meetup',
    },
    {
      id: 'm3',
      title: 'This is a third meetup',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Netflix-avatar.png/600px-Netflix-avatar.png',
      address: 'Some address 15, 12345 Some City',
      description: 'This is a third meetup',
    },
  ]
  return (
    <>
    <MeetupList meetups={DUMMY_MEETUPS} />
    </>
  )
}

export default index
