import { useEffect, useState } from 'react';

// components
import WorkoutsDetails from '../components/WorkoutsDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  
  useEffect(() => {
    const fetchWorkouts = async () => {
      // due to CORS restrictions and proxy work-around, only api/workouts is needed
      // const response = await fetch('http://localhost:4000/api/workouts');

      const response = await fetch('/api/workouts');
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
      return;
    };
  
    fetchWorkouts();
  }, []);

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