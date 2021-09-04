import Layout from '../components/layout/Layout'
import "../css/global.css"
import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0'
function MyApp({ Component, pageProps }) {


    return <UserProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </UserProvider>
}
export default MyApp