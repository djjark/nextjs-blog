import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer'
import MeetupList from '../components/meetups/MeetupList'
const { MongoClient } = require('mongodb');
const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'meet1',
        image: 'https://cdn.discordapp.com/attachments/810858598954958862/881173812916396052/23023608_1482711901764655_343044072_n.jpg',
        address: 'some address',
        description: 'this is a first meet'
    },
    {
        id: 'm2',
        title: 'meet2',
        image: 'https://cdn.discordapp.com/attachments/810858598954958862/881173812916396052/23023608_1482711901764655_343044072_n.jpg',
        address: 'some address2',
        description: 'this is a first meet2'
    }
];

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     console.log(req + " " + res);
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// }

export async function getStaticProps() {
    //code that runs in the server and not in the client side
    //we can connect to db or API or backend
    //fetch('/api/meetups');
    const uri = "mongodb+srv://ricardo:luz@cluster0.knayb.mongodb.net/nodejs-blog?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    const db = client.db();

    const blogCollection = db.collection('meetups');
    const blog = await blogCollection.find().toArray();
    client.close();
    return {
        props: {
            meetups: blog.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                id: meetup._id.toString(),
            }))
        }, revalidate: 1
    };
}

export default function Home(props) {
    // const [loadedMeetups, setLoadedMeetups] = useState([])
    // useEffect(() => {
    //     setLoadedMeetups(props);
    //     return () => {

    //     }
    // }, [])
    return (
        <div id="root">
            <Head>
                <title>React teste diogo e ricardo</title>
            </Head>
            <Navbar />
            <div>

                <MeetupList meetups={props.meetups} />
            </div>
            <Footer />
        </div>
    )
}