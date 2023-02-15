import { client } from '../../utils/mongoClient';

export default async function handler(request, response) {
  if (request.method === 'POST') {
    const data = request.body;
    try {
      await client.connect();
      console.log('Connected successfully to server');
      const collection = client.db('meetups').collection('meetups');
      await collection.insertOne(data);
      console.log('Data inserted successfully');
      response.status(201).json({ message: 'Meetup inserted!' });
    } catch (error) {
      console.log(error.message);
      response.status(500).json({ message: 'Could not store meetup data.' });
    } finally {
      await client.close();
    }
  } else {
    response.status(404).json({ message: 'Invalid request' });
    return;
  }
}
