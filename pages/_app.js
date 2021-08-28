import "../css/global.css"
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Home() {
    return (
        <div className="container">
            <Navbar />
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="diogo">o octavio é gay</div>
            <a href="https://cdn.discordapp.com/attachments/810858598954958862/881173812916396052/23023608_1482711901764655_343044072_n.jpg">Click to get a surprise</a>

            <Footer />
        </div>
    )
}
