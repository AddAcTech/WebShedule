import React from "react";
import { MdDelete } from "react-icons/md";

function Subject({ subject, onDelete }) {
  return (
    <div className="p-3 font-mono border grid grid-cols-2">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{subject.subject}</h1>
        <p>Instructor: {subject.teacher}</p>
        <p>
          Time: {subject.start} - {subject.finish}
        </p>
        <p>Location: {subject.room} </p>
      </div>
      <button onClick={onDelete} className="flex justify-end items-center pr-4">
        <MdDelete size={30} />
      </button>
    </div>
  );
}

export default Subject;
