//Las materias seran un arreglo de strings

import { useState } from "react";

function SubjectForm() {
  const [subject, setSubject] = useState("");

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(subject);
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
