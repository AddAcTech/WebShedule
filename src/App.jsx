import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Principal from "./components/Principal";
import SubjectForm from "./components/SubjectForm";
import ScheduleForm from "./components/ScheduleForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/form" element={<SubjectForm />} />
        <Route path="/schedule" element={<ScheduleForm />} />
      </Routes>
    </Router>
  );
}

export default App;
