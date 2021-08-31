//isto mete cenas na base de dados

import { MongoClient } from "mongodb";

async function handler(req, res) {

    if (req.method === 'POST') {
        const data = req.body;
        console.log("hello")

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
}
export default handler;