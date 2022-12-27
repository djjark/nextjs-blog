import Navbar from '../../components/layout/Navbar'
import { Fragment } from 'react';
import Link from 'next/link'
import ShoppingList from '../../components/shopping_list/ShoppingList'
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
const { MongoClient } = require('mongodb');
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
// export const getServerSideProps = withPageAuthRequired();



export const getServerSideProps = withPageAuthRequired({
    //returnTo: '/foo',
    
    async getServerSideProps(ctx) {
        const uri = process.env.DATABASE_LINK
        const client = await MongoClient.connect(uri);
        const db = client.db();
    
        const blogCollection = db.collection('shopping');
        const blog = await blogCollection.find().toArray();
        client.close();

        const session = getSession(ctx.req, ctx.res);
        //check the console of backend, you will get tokens here
        let user_id = "";
        if(session && session.sub)
            user_id = session.sub.split("|")[1]
        return {
            props: {
                shopping: blog.map(item => ({
                    item: item.item,
                    user_id: item.user_id,
                    hora: item.hora,
                    id: item._id.toString(),
                })),
                user: user_id,
            }
        };

        }
    });


export default function NewPostsPage(props) {
    // console.log(enteredMeetupData)
    const { user, isLoading } = useUser();
    var user_id = ""
    if (user)
        user_id = user.sub.split("|")[1]

    const router = useRouter();
    //send the request to the API at api/new-meetup
    async function addItem(ItemData) {
        console.log(ItemData)
        const response = await fetch('/api/shopping-list', {
            method: 'POST',
            body: JSON.stringify(ItemData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();    
        return data
    }
    let a = props.user.sub.split("|")[1]

    return (
        <div id="root">
            <div>
                <ShoppingList onAddItem={addItem} items={props.shopping.filter(item => item.user_id == a)}/>
            </div>
        </div>
    )
}