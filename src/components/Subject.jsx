import React from "react";

function Subject({ subject }) {
  return (
    <div className="p-3 font-mono border">
      <h1 className="text-2xl font-bold">{subject}</h1>
      <p>Instructor: </p>
      <p>Time: 11:00 AM - 12:30 PM </p>
      <p>Location: Room 102 </p>
    </div>
  );
}

export default Subject;
