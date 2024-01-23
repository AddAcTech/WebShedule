import React from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Principal() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p>Crear Horario</p>
      <button onClick={() => navigate("/form")}>
        <FaEdit size={60} />
      </button>
    </div>
  );
}

export default Principal;
