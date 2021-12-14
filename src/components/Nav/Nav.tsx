import { useContext } from "react";
// Context
import { UserContext } from "../../utils/context";
// Scss
import "./Nav.scss";

function Nav (){
  const { state, dispatch } = useContext(UserContext);

  return (
    <nav className={state.isOpen ? "show-menu" : ""}>
      <button type="button" onClick={() => dispatch({ type: "toggle" })}>
        X
      </button>
      <span>{state.language}</span>
    </nav>
  );
}
export default Nav;
