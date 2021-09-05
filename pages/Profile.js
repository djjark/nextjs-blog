import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import Navbar from '../components/layout/Navbar'
import Loading from './Loading';
import Image from 'next/image';
function Profile() {
    const { user, isLoading } = useUser();
    console.log(user.email)
    return (<>
        {isLoading && <Loading />}
        {user && (<div>
            <h1>HELLO THIS IS Diogo</h1>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <h2>{user.email_verified}</h2>
            <h2>{user.nickname}</h2>
            <img src={user.picture} alt={user.name} />
            <h2>{user.sub}</h2>
            <h2>{user.updated_at}</h2>

        </div>)}

    </>)
}

export default withPageAuthRequired(Profile, {

    //onError: error => <ErrorMessage>{error.message}</ErrorMessage>
})