import "./App.css";
import Navbar from "./components/Navbar";
import Newval from "./components/TableArray";
// import Statebasics from "./components/Statebasics";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Statebasics/>       */}

      <Newval />
    </div>
  );
}

export default App;
