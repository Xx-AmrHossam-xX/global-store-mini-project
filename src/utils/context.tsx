import { createContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

interface InitialStateType {
  isOpen: boolean;
  language: string;
  user: string;
}
interface IAppContext {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}
const UserContext = createContext<IAppContext>({
  state: initialState,
  dispatch: () => null,
});

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
