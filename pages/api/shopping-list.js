//isto mete cenas na base de dados

const { MongoClient, ObjectId } = require('mongodb');

export default async function handler(req, res) {
    const data = req.body;
    const uri = process.env.DATABASE_LINK
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const blogCollection = db.collection('shopping');

    if (req.method === 'POST') {
        //const { title, image, address, description } = data;
        const query = { user_id: data.user_id }
        const update = { $set: { user_id: data.user_id, item: data.item, hora: data.hora}};
        const options = { upsert: true };
        console.log(data)
        const result = await blogCollection.updateOne(query, update, options);
        console.log(result);
        client.close();
        res.status(201).json({ message: 'diogo teste base de dados' });
    }
}
