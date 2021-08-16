import Main from "./views/Main";

const App = (props) => {

  return (
   	<Main data={props.data} rate={props.rate}/>
  );
}

export default App;
