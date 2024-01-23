import React, { useEffect, useState } from "react";
import Subject from "./Subject";
import Header from "./Header";
import EmptySchedule from "./EmptySchedule";
import { AiFillSchedule } from "react-icons/ai";

function Principal() {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("schedule"));
    if (response) {
      setSubjects(response);
      console.log(response);
    }
  }, []);

  if (subjects.length === 0 || !subjects) {
    return <EmptySchedule />;
  }

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mx-auto">
          <AiFillSchedule size={40} />
          <h1 className="text-center text-3xl font-bold my-2">DAY schedule</h1>
        </div>
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
