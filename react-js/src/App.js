// import {Displayname} from "./Displayname";
import Displayname from "./Displayname";

import './App.css';
function alertName(name)
{
  alert("Hi " + name);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
     <Displayname name="Sakshi" alertName={alertName}/>
      </header>
    </div>
  );
}

export default App;
