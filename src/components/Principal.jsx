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
    setDia(dias[fecha.getDay() - 1]);
  }, [fecha]);

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("schedule"));
    if (response) {
      setSubjects(response);
    }
  }, []);

  // Filtramos los subjects por el día de hoy y ordenamos por hora ascendente
  useEffect(() => {
    setToday(
      subjects
        .filter((subject) => subject.day === dia)
        .sort((a, b) => {
          const [hourA, minuteA] = a.start.split(":").map(Number);
          const [hourB, minuteB] = b.start.split(":").map(Number);
          return hourA * 60 + minuteA - (hourB * 60 + minuteB);
        })
    );
  }, [subjects, dia]);

  const handleDelete = (subjectToDelete) => {
    const updatedSubjects = subjects.filter(
      (subject) => subject !== subjectToDelete
    );
    setSubjects(updatedSubjects);
    localStorage.setItem("schedule", JSON.stringify(updatedSubjects));
  };

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
          <div key={index}>
            <Subject subject={subject} onDelete={() => handleDelete(subject)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Principal;
