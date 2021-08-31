import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import MeetupList from '../components/meetups/MeetupList'
import { description } from 'platform';

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
export default function Home() {
    return (
        <div id="root">
            <Navbar />
            <div>
                <MeetupList meetups={DUMMY_MEETUPS} />
            </div>
            <Footer />
        </div>
    )
}