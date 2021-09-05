//isto mete cenas na base de dados

const { MongoClient, ObjectId } = require('mongodb');

export default async function handler(req, res) {
    const data = req.body;
    const uri = process.env.DATABASE_LINK
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const blogCollection = db.collection('meetups');

    if (req.method === 'POST') {
        //const { title, image, address, description } = data;

        const result = await blogCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({ message: 'diogo teste base de dados' });
    }
    if (req.method === 'DELETE') {
        //const { title, image, address, description } = data;
        const result = await blogCollection.deleteOne({ _id: ObjectId(data) });
        console.log(result)
        client.close();
        res.status(201).json({ message: 'diogo delete base de dados' });
    }
}
