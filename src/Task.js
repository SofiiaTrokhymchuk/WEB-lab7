import React from "react";
import "./css/Task.css";

const Task = (props) => {
  return <h1 className="Task">Завдання №{props.taskNumber}</h1>;
};

export default Task;
