import Navbar from '../components/layout/Navbar'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/layout/Footer'
import MeetupList from '../components/meetups/MeetupList'
const { MongoClient } = require('mongodb');
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

export async function getServerSideProps(context) {
    //code that runs in the server and not in the client side
    //we can connect to db or API or backend
    //fetch('/api/meetups');
    const uri = process.env.DATABASE_LINK
    const client = await MongoClient.connect(uri);
    const db = client.db();

    const blogCollection = db.collection('meetups');
    const blog = await blogCollection.find().toArray();
    client.close();

    return {
        props: {
            meetups: blog.map(meetup => ({
                hora: meetup.hora,
                user_id: meetup.user_id,
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                id: meetup._id.toString(),
            })),
        }
    };
}


export default function Home(props) {
    return (
        <div id="root">
            <Head>
                <title>React teste</title>
            </Head>
            <div>
                <MeetupList meetups={props.meetups} />
            </div>
            <Footer />
        </div>
    )
}