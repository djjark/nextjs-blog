import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'
import { Fragment } from 'react';
import Link from 'next/link'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
export default function NewPostsPage() {
    function addMeetupHandler() {

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