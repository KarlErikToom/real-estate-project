import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import FrontPage from "./pages/FrontPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Properties from "./pages/Properties";
import { properties } from "./data";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route
            path="/properties"
            element={<Properties properties={properties} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
