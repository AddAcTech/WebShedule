import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function SubjectForm() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("subjects"));
    if (response) {
      setSubjects(response);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubjects([...subjects, subject]);
    localStorage.setItem("subjects", JSON.stringify([...subjects, subject]));
    navigate("/");
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="flex flex-col gap-2 border p-4 border-black rounded">
        <div className="flex flex-col gap-1">
          <label className="text-center text-3xl font-bold">New Subject</label>
          <input
            type="text"
            name="subject"
            className="input"
            placeholder="Algorithms"
            onChange={handleSubjectChange}
          />
        </div>
        <button className="input" onClick={handleSubmit}>
          Create Subject
        </button>
      </form>
    </div>
  );
}

export default SubjectForm;
