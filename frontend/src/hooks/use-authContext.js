import AuthContext from "../store/AuthContext";
import { useContext } from 'react';

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error ("useAuthContext hook must be used inside WorkoutsProvider.")
  }

  return context;
};