import { useState, useContext } from "react";
// Context
import { UserContext } from "./utils/context";
// Components
import Nav from "./components/Nav/Nav";
// Style
import "./App.scss";

function App (){
  const { state, dispatch } = useContext(UserContext);
  const [ changeUserMode, setChangeUserMode ] = useState(false);
  const [ name, setName ] = useState("");
  function submit (e: React.FormEvent){
    if (name.trim().length > 0) {
      dispatch({ type: "changeUser", user: name });
      setChangeUserMode(false);
      setName("");
    }
    e.preventDefault();
  }
  return (
    <div className="App">
      <h1>Welcome Back {state.user}</h1>
      {changeUserMode ? (
        <form onSubmit={e => submit(e)}>
          <input
            placeholder="Enter new user name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      ) : (
        <button
          type="button"
          onClick={() => setChangeUserMode(true)}
          className="change-user-button"
        >
          Not you ?
        </button>
      )}
      <button
        type="button"
        onClick={() => dispatch({ type: "toggle" })}
        className="toggle-button"
      >
        Toggle
      </button>
      <Nav />
    </div>
  );
}

export default App;
