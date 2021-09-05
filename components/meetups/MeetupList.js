import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.scss';

function MeetupList(props) {
  const a = props.meetups.sort((a, b) => b.hora - a.hora)
  return (
    <div className="container mx-0">
      <div className={" row"}>
        {a.map((meetup) => (
          // <div className="col-12 col-lg-4">
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            hora={meetup.hora}
            user_id={meetup.user_id}
          />
          /* </div> */
        ))}
      </div>
    </div>
  );
}

export default MeetupList;
