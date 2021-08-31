import Navbar from '../../components/Navbar'
import { Fragment } from 'react';
import Link from 'next/link'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router';
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

        console.log(data);
        router.push('/');
        //return data
    }

    return (
        <div id="root">
            <Navbar />
            <div>
                <NewMeetupForm onAddMeetup={addMeetupHandler} />
            </div>
            <h1>HELLO THIS IS Posts</h1>
            <Fragment>
                <h2>The Posts Page</h2>
                <ul>
                    <li><Link href="/posts/great-nextjs">NextJS is great</Link></li>
                    <li>Diogoo</li>
                </ul>
            </Fragment>
        </div>
    )
}