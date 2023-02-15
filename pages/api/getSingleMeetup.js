import { MongoServerError, ObjectId } from 'mongodb';
import { client } from '../../utils/mongoClient';

export default async function handler(request, response) {
  if (request.method === 'GET') {
    try {
      await client.connect();
      console.log('Connected successfully to server');
      const collection = client.db('meetups').collection('meetups');
      let result = await collection.findOne({ _id: new ObjectId(request.query['meetupId'].toString()) });
      console.log(request.query['meetupId'].toString());
      console.log(result);
      response.status(201).json({
        message: 'Meetup id successfully retrieved!',
        meetupId: result,
      });
    } catch (error) {
      if (error instanceof MongoServerError) {
        console.log(`Error worth logging: ${error}`); // special case for some reason
      }
      response.status(500).json({ message: 'Error fetching data' });
      throw error;
    } finally {
      setTimeout(() => {
        client.close();
      }, 2000);
    }
  } else {
    response.status(404).json({ message: 'Invalid request' });
    return;
  }
}
