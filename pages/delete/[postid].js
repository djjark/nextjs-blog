import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { useEffect } from 'react';

export default function DetailPage(props) {
    const router = useRouter();
    console.log("poistid page")
    useEffect(() => {
        router.push('/');
    }, [])

    return <Fragment>
    </Fragment>
}
