import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LeaveReportPage from "./components/LeaveReportPage";
import LeaveReportPage2 from "./components/LeaveReportPage2";
import LeaveReportPage3 from "./components/LeaveReportPage3";
import LeaveReportPage4 from "./components/LeaveReportPage4";
import LeaveReportPage5 from "./components/LeaveReportPage5";
import LeaveReportPage6 from "./components/LeaveReportPage6";
import LeaveReportPage7 from "./components/LeaveReportPage7";
import LeaveReportPage8 from "./components/LeaveReportPage8";
import LeaveReportPage9 from "./components/LeaveReportPage9";
import LeaveReportPage10 from "./components/LeaveReportPage10";
import LeaveReportPage11 from "./components/LeaveReportPage11";
import LeaveReportPage12 from "./components/LeaveReportPage12";
import LeaveReportPage13 from "./components/LeaveReportPage13";
import LeaveReportPage14 from "./components/LeaveReportPage14";
import "./index.css";
import CancelLeave from "./components/CancelLeave";
import ApplyLeave from "./components/ApplyLeave";
import PaternityLeave from "./components/PaternityLeave";
export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<LeaveReportPage />} />
          <Route path="/2" element={<LeaveReportPage2 />} />
          <Route path="/3" element={<LeaveReportPage3 />} />
          <Route path="/4" element={<LeaveReportPage4 />} />
          <Route path="/5" element={<LeaveReportPage5 />} />
          <Route path="/6" element={<LeaveReportPage6 />} />
          <Route path="/7" element={<LeaveReportPage7 />} />
          <Route path="/8" element={<LeaveReportPage8 />} />
          <Route path="/9" element={<LeaveReportPage9 />} />
          <Route path="/10" element={<LeaveReportPage10 />} />
          <Route path="/11" element={<LeaveReportPage11 />} />
          <Route path="/12" element={<LeaveReportPage12 />} />
          <Route path="/13" element={<LeaveReportPage13 />} />
          <Route path="/14" element={<LeaveReportPage14 />} />
          <Route path="/CancelLeave" element={<CancelLeave />} />
          <Route path="/ApplyLeave" element={<ApplyLeave />} />
          <Route path="/PaternityLeave" element={<PaternityLeave />} />
        </Routes>
      </Router>
    </div>
  );
}
