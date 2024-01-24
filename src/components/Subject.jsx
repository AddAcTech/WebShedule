import React from "react";

function Subject({ subject, teacher, start, finish, room }) {
  return (
    <div className="p-3 font-mono border">
      <h1 className="text-2xl font-bold">{subject}</h1>
      <p>Instructor: {teacher}</p>
      <p>
        Time: {start} - {finish}
      </p>
      <p>Location: {room} </p>
    </div>
  );
}

export default Subject;
