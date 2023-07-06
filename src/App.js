import "./App.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Featured from "./components/Featured";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Featured />
      <Contact />
    </div>
  );
}

export default App;
