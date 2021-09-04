import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
function MeetupItem(props) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push('/posts/' + props.id);
  }
  async function deleteHandler() {
    router.push('/delete/' + props.id);
    const response = await fetch('/api/new-meetup', {
      method: 'DELETE',
      body: JSON.stringify(props.id),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

  }
  return (
    <li className={classes.item}>
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
          <button onClick={deleteHandler}>Delete</button>

        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
