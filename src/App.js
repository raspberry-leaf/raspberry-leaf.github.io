import Main from "./views/Main";
import "./App.css";

const App = (props) => {

  return (
   	<Main data={props.data} rate={props.rate}/>
  );
}

export default App;
