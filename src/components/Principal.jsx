import React, { useEffect, useState } from "react";
import Subject from "./Subject";
import Header from "./Header";
import EmptySchedule from "./EmptySchedule";

function Principal() {
  const [subjects, setSubjects] = useState([]);
  /* useEffect(() => {
    const response = JSON.parse(localStorage.getItem("schedule"));
    if (response) {
      setSubjects(response);
      console.log(response);
    }
  }, []); */

  if (subjects.length === 0 || !subjects) {
    return <EmptySchedule />;
  }

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col">
        {subjects.map((subject, index) => (
          <Subject
            subject={subject.subject}
            teacher={subject.teacher}
            start={subject.start}
            finish={subject.finish}
            room={subject.room}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Principal;
