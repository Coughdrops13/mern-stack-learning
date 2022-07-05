import { useWorkoutsContext } from "../hooks/use-workoutsContext";

const WorkoutsDetails = ({ workout }) => {
  // alternate way to destructure workout data from  props
  // const {workout} = props.workout;

  const { dispatch } = useWorkoutsContext();

  const clickHandler = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    console.log("JSON", json);

    if (!response.ok) {
      console.log("SOMETHING WRONG");
    }
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={clickHandler}>Delete</span>
    </div>
  );
};

export default WorkoutsDetails;
