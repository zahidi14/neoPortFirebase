import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./misc/Router/Routing";
import "./app.scss";
import { Nav } from "./component";

function App() {
  return (
    <>
      <Nav />
      <Routing />
    </>
  );
}

export default App;
