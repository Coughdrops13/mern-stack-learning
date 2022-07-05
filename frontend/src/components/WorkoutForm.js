import { useState } from "react";
import { useWorkoutsContext } from "../hooks/use-workoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const loadChangeHandler = (event) => {
    setLoad(event.target.value);
  };

  const repsChangeHandler = (event) => {
    setReps(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const workout = {
      title,
      load,
      reps,
    };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      console.log("New workout added!", json);
      dispatch({
        type: "CREATE_WORKOUT",
        payload: json,
      });
    }
  };

  return (
    <form className="create" onSubmit={submitHandler}>
      <h3>Add a New Workout</h3>
      <label>Exercise Title:</label>
      <input type="text" onChange={titleChangeHandler} value={title} />
      <label>Load (kg):</label>
      <input type="number" onChange={loadChangeHandler} value={load} />
      <label>Reps</label>
      <input type="number" onChange={repsChangeHandler} value={reps} />
      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
