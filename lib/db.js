import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://username:<password>>@clusterauth.05tfzw6.mongodb.net/?retryWrites=true&w=majority');
    return client;
}