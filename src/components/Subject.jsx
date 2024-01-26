import React from "react";
import { MdDelete } from "react-icons/md";

function Subject({ subject, onDelete }) {
  return (
    <div className="p-3 font-mono border flex justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{subject.subject}</h1>
        <p>Instructor: {subject.teacher}</p>
        <p>
          Time: {subject.start} - {subject.finish}
        </p>
        <p>Location: {subject.room} </p>
      </div>
      <button onClick={onDelete}>
        <MdDelete size={30} />
      </button>
    </div>
  );
}

export default Subject;
