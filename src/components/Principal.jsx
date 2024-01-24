import React, { useEffect, useState } from "react";
import Subject from "./Subject";
import Header from "./Header";
import EmptySchedule from "./EmptySchedule";
import { AiFillSchedule } from "react-icons/ai";

function Principal() {
  const [subjects, setSubjects] = useState([]);
  const [today, setToday] = useState([]);
  const [fecha, setFecha] = useState(new Date());
  const [dia, setDia] = useState("");
  const [dias, setDias] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ]);

  useEffect(() => {
    setDia(dias[fecha.getDay()]);
  }, [fecha]);

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("schedule"));
    if (response) {
      setSubjects(response);
      console.log(response);
    }
  }, []);

  // Filtramos los subjects por el día de hoy
  useEffect(() => {
    setToday(subjects.filter((subject) => subject.day === dia));
  }, [subjects, dia]);

  if (today.length === 0 || !today) {
    return <EmptySchedule />;
  }

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mx-auto">
          <AiFillSchedule size={40} />
          <h1 className="text-center text-3xl font-bold my-2">
            {dia} schedule
          </h1>
        </div>
        {today.map((subject, index) => (
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
