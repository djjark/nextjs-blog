import "../css/global.css"
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Layout from "../components/Layout"
export default function Home() {
    return (
        <div>
            <Navbar />
            <div>
                <Layout />
            </div>
            <Footer />
        </div>
    )
}
