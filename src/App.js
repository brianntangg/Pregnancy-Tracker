import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Info from "./Info";
import Settings from "./Settings";
import Symptoms from "./Symptoms";
import Tips from "./Tips";

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/info" element={<Info />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/symptoms" element={<Symptoms />} />
            <Route path="/tips" element={<Tips />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
