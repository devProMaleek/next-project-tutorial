import { MongoServerError } from 'mongodb';
import { client } from '../../utils/mongoClient';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    try {
      await client.connect();
      console.log('Connected successfully to server');
      const collection = client.db('meetups').collection('meetups');
      let result = await collection.find({}, { _id: 1 }).toArray();
      result = result.map((meetup) => {
        return {
          id: meetup._id.toString(),
        };
      });
      response.status(201).json({
        message: 'Meetups id successfully retrieved!',
        meetupIds: result,
      });
    } catch (error) {
      if (error instanceof MongoServerError) {
        console.log(`Error worth logging: ${error}`); // special case for some reason
      }
      response.status(500).json({ message: 'Error fetching data' });
      throw error;
    } finally {
      await client.close();
    }
  } else {
    response.status(404).json({ message: 'Invalid request' });
    return;
  }
}
