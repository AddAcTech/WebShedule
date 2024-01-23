import React, { useState, useEffect } from "react";

function ScheduleForm() {
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

  const handleSubmit = () => {
    setPrevSchedule([...prevSchedule, schedule]);
    localStorage.setItem(
      "schedule",
      JSON.stringify([...prevSchedule, schedule])
    );
  };

  return (
    <div className="h-screen flex flex-col gap-2 items-center justify-center">
      <h1 className="text-2xl font-bold">New Schedule</h1>
      <form className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <label className="">Day</label>
          <select
            className="border border-black p-1 w-full"
            onChange={handleChange}
            name="day"
          >
            <option value="0">Monday</option>
            <option value="1">Tuesday</option>
            <option value="2">Wednesday</option>
            <option value="3">Thrusday</option>
            <option value="4">Friday</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <label className="">Subject</label>
          <select
            className="border border-black p-1 w-full"
            onChange={handleChange}
            name="subject"
          >
            {subjects.map((subject, index) => (
              <option key={index}>{subject}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <label className="">Teacher</label>
          <input
            type="text"
            className="border border-black w-full"
            onChange={handleChange}
            name="teacher"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="">Starts</label>
          <input
            type="time"
            className="border border-black w-full"
            onChange={handleChange}
            name="start"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="">Finish</label>
          <input
            type="time"
            className="border border-black w-full"
            onChange={handleChange}
            name="finish"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label className="">Room</label>
          <input
            type="text"
            className="border border-black w-full"
            onChange={handleChange}
            name="room"
          />
        </div>
        <button onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}

export default ScheduleForm;
