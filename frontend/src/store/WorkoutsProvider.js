import { useReducer } from "react";
import WorkoutsContext from "./workouts-context";

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload
      }
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      }
    case "DELETE_WORKOUT":  
      return {
        workouts: state.workouts.filter((workout) => workout._id !== action.payload._id)
      }
    case "UPDATE_WORKOUT":
      return {
        workouts: [...state.workouts, action.payload]
      }
    default:
      return state;
  }
};

export const WorkoutsProvider = (props) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });

  return (
    <WorkoutsContext.Provider value={{...state, dispatch}}>
      {props.children}
    </WorkoutsContext.Provider>
  );
};


