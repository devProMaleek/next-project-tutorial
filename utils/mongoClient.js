import { MongoClient } from 'mongodb';
const uri =
  'mongodb+srv://devProMaleek:devProMaleek07@devpromaleek-cluster.l00joyx.mongodb.net/meetups?retryWrites=true&w=majority';
export const client = new MongoClient(uri, { useNewUrlParser: true });
