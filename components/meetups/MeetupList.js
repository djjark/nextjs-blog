import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  const a = props.meetups.sort((a, b) => b.hora - a.hora)
  console.log(a)
  return (
    <ul className={classes.list}>
      {a.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
