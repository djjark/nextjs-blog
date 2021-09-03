//isto mete cenas na base de dados

const { MongoClient, ObjectId } = require('mongodb');

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const data = req.body;
        //const { title, image, address, description } = data;
        const uri = "mongodb+srv://ricardo:luz@cluster0.knayb.mongodb.net/nodejs-blog?retryWrites=true&w=majority";
        const client = await MongoClient.connect(uri);
        const db = client.db();

        const blogCollection = db.collection('meetups');
        const result = await blogCollection.insertOne(data);
        console.log("hleoo")
        console.log(result);

        client.close();
        res.status(201).json({ message: 'diogo teste base de dados' });
    }
    if (req.method === 'DELETE') {
        const data = req.body;
        //const { title, image, address, description } = data;
        const uri = "mongodb+srv://ricardo:luz@cluster0.knayb.mongodb.net/nodejs-blog?retryWrites=true&w=majority";
        const client = await MongoClient.connect(uri);
        const db = client.db();
        const blogCollection = db.collection('meetups');
        const result = await blogCollection.deleteOne({ _id: ObjectId(data) });
        console.log(result)
        client.close();
        res.status(201).json({ message: 'diogo delete base de dados' });
    }
}
