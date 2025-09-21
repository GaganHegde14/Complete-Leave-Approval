import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import PaternityLeave from "./components/PaternityLeave.jsx";
import ApplyLeave from "./components/ApplyLeave.jsx";
import CancelLeave from "./components/CancelLeave.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CancelLeave />} />
          {/* <Route path="/cancel-leave" element={<CancelLeave />} /> */}
          <Route path="/ApplyLeave" element={<ApplyLeave />} />
          <Route path="/PaternityLeave" element={<PaternityLeave />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
