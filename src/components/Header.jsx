import React from "react";
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 p-2 bg-slate-500">
      <div className="flex items-center gap-3 mx-auto">
        <button
          className="flex items-center gap-2"
          onClick={() => navigate("/form")}
        >
          <p className="font-bold text-xl">New Subject</p>
          <IoMdAddCircle size={40} />
        </button>
      </div>
      <div className="flex items-center gap-3 mx-auto">
        <button
          className="flex items-center gap-2"
          onClick={() => navigate("/schedule")}
        >
          <p className="font-bold text-xl">Create Schedule</p>
          <FaEdit size={40} />
        </button>
      </div>
    </div>
  );
}

export default Header;
