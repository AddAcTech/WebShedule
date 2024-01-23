import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Subject from "./Subject";

function Principal() {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("subjects"));
    if (response) {
      setSubjects(response);
    }
  }, []);
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col">
      <div className="grid grid-cols-2 p-2 bg-slate-500">
        <div className="flex items-center gap-3 mx-auto">
          <p className="font-bold text-xl">New Subject</p>
          <button onClick={() => navigate("/form")}>
            <IoMdAddCircle size={40} />
          </button>
        </div>
        <div className="flex items-center gap-3 mx-auto">
          <p className="font-bold text-xl">Create Schedule</p>
          <button onClick={() => navigate("/schedule")}>
            <FaEdit size={40} />
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        {subjects.map((subject) => (
          <Subject subject={subject} />
        ))}
      </div>
    </div>
  );
}

export default Principal;
