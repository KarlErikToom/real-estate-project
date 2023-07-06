import "./App.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Featured from "./components/Featured";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Featured />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
