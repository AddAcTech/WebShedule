import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ScheduleForm() {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);
  const [prevSchedule, setPrevSchedule] = useState([]);
  const [schedule, setSchedule] = useState({
    day: "",
    subject: "",
    teacher: "",
    start: "",
    finish: "",
    room: "",
  });

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem("subjects"));
    const responseSchedule = JSON.parse(localStorage.getItem("schedule"));
    if (response) {
      setSubjects(response);
    }
    if (responseSchedule) {
      setPrevSchedule(responseSchedule);
    }
  }, []);

  const handleChange = (e) => {
    setSchedule({ ...schedule, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrevSchedule([...prevSchedule, schedule]);
    localStorage.setItem(
      "schedule",
      JSON.stringify([...prevSchedule, schedule])
    );
    navigate("/");
  };

  return (
    <div className="h-screen flex flex-col gap-2 items-center justify-center">
      <form className="flex flex-col gap-2 border p-4 border-black rounded">
        <h1 className="text-center text-3xl font-bold">New Schedule</h1>
        <div className="flex gap-2 items-center">
          <label className="font-mono">Day</label>
          <select className="input w-full" onChange={handleChange} name="day">
            <option>Select Day</option>
            <option value="0">Monday</option>
            <option value="1">Tuesday</option>
            <option value="2">Wednesday</option>
            <option value="3">Thrusday</option>
            <option value="4">Friday</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <label className="font-mono">Subject</label>
          <select
            className="input w-full"
            onChange={handleChange}
            name="subject"
          >
            <option>Select Subject</option>
            {subjects.map((subject, index) => (
              <option key={index}>{subject}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <label className="font-mono">Teacher</label>
          <input
            type="text"
            className="input w-full"
            onChange={handleChange}
            name="teacher"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="font-mono">Starts</label>
          <input
            type="time"
            className="input w-full"
            onChange={handleChange}
            name="start"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="font-mono">Finish</label>
          <input
            type="time"
            className="input w-full"
            onChange={handleChange}
            name="finish"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="font-mono">Room</label>
          <input
            type="text"
            className="input w-full"
            onChange={handleChange}
            name="room"
          />
        </div>
        <button onClick={handleSubmit} className="input">
          Create
        </button>
      </form>
    </div>
  );
}

export default ScheduleForm;
