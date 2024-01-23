//Las materias seran un arreglo de strings

import { useState, useEffect } from "react";

function SubjectForm() {
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
    setSubjects([...subjects, subject]);
    localStorage.setItem("subjects", JSON.stringify([...subjects, subject]));
    /* console.log(subject); */
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label>New Subject</label>
          <input
            type="text"
            name="subject"
            className="border border-black rounded"
            onChange={handleSubjectChange}
          />
        </div>
        <button
          className="px-3 text-center bg-black text-white rounded"
          onClick={handleSubmit}
        >
          Create Subject
        </button>
      </form>
    </div>
  );
}

export default SubjectForm;
