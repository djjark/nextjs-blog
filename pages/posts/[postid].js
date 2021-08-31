import { useRouter } from 'next/router';

export default function DetailPage() {
    const router = useRouter();

    const postid = router.query.postid

    return <h1> The Detail Page</h1>
}
