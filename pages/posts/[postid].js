import { useRouter } from 'next/router';
import { Fragment } from 'react';
const { MongoClient, ObjectId } = require('mongodb');

export default function DetailPage(props) {
    const router = useRouter();

    const postid = router.query.postid
    console.log(props.meetupData)
    return <Fragment>
        <img src={props.meetupData.image} alt={props.meetupData.title}></img>
        <h1>{props.meetupData.title}</h1>
        <h2>{props.meetupData.address}</h2>
        <h3>{props.meetupData.description}</h3>



    </Fragment>
}

export async function getStaticPaths() {
    const uri = "mongodb+srv://ricardo:luz@cluster0.knayb.mongodb.net/nodejs-blog?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    const db = client.db();

    const blogCollection = db.collection('meetups');
    const blog = await blogCollection.find({}, { _id: 1 }).toArray();
    client.close();
    return {
        fallback: 'blocking',
        paths: blog.map(blog => ({
            params: { postid: blog._id.toString() }
        })),
    }
}
export async function getStaticProps(context) {

    const gg = context.params.postid;

    const uri = "mongodb+srv://ricardo:luz@cluster0.knayb.mongodb.net/nodejs-blog?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    const db = client.db();

    const blogCollection = db.collection('meetups');
    const selectedMeetup = await blogCollection.findOne({ _id: ObjectId(gg) });
    console.log(gg + " " + selectedMeetup)
    client.close();
    // console.log(postid);
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            }
        }
    }
}