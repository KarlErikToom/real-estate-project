import "./App.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Featured from "./components/Featured";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Featured />
    </div>
  );
}

export default App;
