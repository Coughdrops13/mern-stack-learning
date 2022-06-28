const WorkoutsDetails = ({ workout }) => {
  // alternate way to destructure workout data from  props
  // const {workout} = props.workout;
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
    </div>
  );
};

export default WorkoutsDetails;
