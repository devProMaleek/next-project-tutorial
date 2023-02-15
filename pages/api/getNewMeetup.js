import { MongoClient } from 'mongodb';
const uri =
  'mongodb+srv://devProMaleek:devProMaleek07@devpromaleek-cluster.l00joyx.mongodb.net/meetups?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true });

export default async function handler(request, response) {
  if (request.method === 'POST') {
    const data = request.body;
    try {
      const result = await client.connect((err) => {
        const collection = client.db('meetups').collection('meetups');
        // perform actions on the collection object
        collection.insertOne(data);
      });
      console.log(result);
      response.status(201).json({ message: 'Meetup inserted!' });
    } catch (error) {
      console.log(error.message);
      response.status(500).json({ message: 'Could not store meetup data.' });
    } finally {
      await client.close();
    }
  }
}
