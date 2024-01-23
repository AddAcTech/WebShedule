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
      <form>
        <div className="flex flex-col">
          <label>Nueva Materia</label>
          <input
            type="text"
            name="subject"
            className="border border-black"
            onChange={handleSubjectChange}
          />
        </div>
        <button
          className="px-3 text-center bg-black text-white rounded"
          onClick={handleSubmit}
        >
          Crear Materia
        </button>
      </form>
    </div>
  );
}

export default SubjectForm;
