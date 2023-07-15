import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import FrontPage from "./pages/FrontPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Properties from "./pages/Properties";
import { properties } from "./data";
import PropertyInfo from "./pages/PropertyInfo";

function App() {
  return (
    <Router basename="/real-estate-project">
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route
            path="/properties"
            element={<Properties properties={properties} />}
          />
          <Route path="/properties/:id" element={<PropertyInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
