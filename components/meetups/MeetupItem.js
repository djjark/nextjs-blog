import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';


function MeetupItem(props) {
  const router = useRouter();
  const { user, isLoading } = useUser()
  var aa = ""
  if (user)
    aa = user.sub.split("|")[1]
  console.log(JSON.stringify(props))

  function showDetailsHandler() {
    router.push('/posts/' + props.id);
  }
  async function deleteHandler() {
    const response = await fetch('/api/new-meetup', {
      method: 'DELETE',
      body: JSON.stringify(props.id),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    router.push('/');

  }
  return (
    <div className={classes.item + " col-12 col-lg-4"}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
          {(aa == props.user_id) ? (<button onClick={deleteHandler}>Delete</button>
          ) : (null)}

        </div>
      </Card>
    </div>
  );
}

export default MeetupItem;
