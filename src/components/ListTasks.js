import React from "react";
import Completed from "./Completed";
import { unchecked } from "./constants";
import { removingInput } from "./body";

const ListTasks = ({task}) => {
    console.log(task,'task iss');
  return (
    <React.Fragment>
      <div className="task">
        <img onClick={()=>{
            removingInput(task,true)
        }} className="checkbox" src={unchecked}></img>
      <h4>{task}</h4>
      <img onClick={()=>{
        removingInput(task)
      }} className="delete-icon" src="https://cdn-icons-png.flaticon.com/128/9542/9542245.png"></img>
    </div>
    </React.Fragment>
    
  );
};

export default ListTasks;
