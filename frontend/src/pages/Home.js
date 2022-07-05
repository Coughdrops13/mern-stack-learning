import { useEffect } from 'react';

// components and custom hooks
import WorkoutsDetails from '../components/WorkoutsDetails';
import WorkoutForm from '../components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/use-workoutsContext';


const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  
  useEffect(() => {
    const fetchWorkouts = async () => {
      // due to CORS restrictions and proxy work-around, only api/workouts is needed
      // const response = await fetch('http://localhost:4000/api/workouts');

      const response = await fetch('/api/workouts');
      const json = await response.json();

      if (response.ok) {
        dispatch({type: "SET_WORKOUTS", payload: json})
      }
      return;
    };
  
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutsDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
};

export default Home;