import Navbar from '../../components/layout/Navbar'
import { Fragment } from 'react';
import Link from 'next/link'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export const getServerSideProps = withPageAuthRequired();



export default function NewPostsPage() {
    // console.log(enteredMeetupData)
    const router = useRouter();
    //send the request to the API at api/new-meetup
    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        router.push('/');
        //return data
    }

    return (
        <div id="root">
            <div>
                <NewMeetupForm onAddMeetup={addMeetupHandler} />
            </div>
        </div>
    )
}