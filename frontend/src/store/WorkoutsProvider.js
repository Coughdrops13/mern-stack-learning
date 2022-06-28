import { useContext } from "react";
import WorkoutsContext from "./workouts-context";

const WorkoutsProvider = ({ children }) => {
  useContext(WorkoutsContext)

  return (
    <WorkoutsContext.Provider>
      {children}
    </WorkoutsContext.Provider>
  )
};

export default WorkoutsProvider;