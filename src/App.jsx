import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Principal from "./components/Principal";
import SubjectForm from "./components/SubjectForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/form" element={<SubjectForm />} />
      </Routes>
    </Router>
  );
}

export default App;
