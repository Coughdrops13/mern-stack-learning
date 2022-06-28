import WorkoutsContext from "../store/workouts-context";
import { useContext } from 'react';

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error ("useWorkoutsContext hook must be used inside WorkoutsProvider.")
  }

  return context;
};