import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./misc/Router/Routing";
import "./app.scss";
import { Nav, StarfieldCanvas } from "./component";

function App() {
  return (
    <>
      <div className="bg">
        <StarfieldCanvas />
      </div>
      <div className="main">
        <Nav />
        <Routing />
      </div>
    </>
  );
}

export default App;
