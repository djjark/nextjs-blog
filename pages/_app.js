import Layout from '../components/layout/Layout'
import 'bootstrap/dist/css/bootstrap.css'

import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0'
import classes from '../css/global.css'
function MyApp({ Component, pageProps }) {


    return <UserProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </UserProvider>
}
export default MyApp