import React from "react";
import Header from "./Header";
import { TbMoodEmpty } from "react-icons/tb";

function EmptySchedule() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col h-screen items-center justify-center text-slate-500">
        <h1 className="text-center text-3xl font-bold">No schedule yet</h1>
        <TbMoodEmpty size={100} />
      </div>
    </div>
  );
}

export default EmptySchedule;
