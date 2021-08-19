import Main from "./views/Main";
import "./App.css";

const App = (props) => {
  const {data, rates, desc} = props;

  return (
   	<Main data={data}
          rates={rates}
          desc={desc}
    />
  );
}

export default App;
