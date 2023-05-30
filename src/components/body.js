import React from "react";
import { useState,useEffect } from "react";
import AddTask from "./addTask";
import ListTasks from "./ListTasks";
import Completed from "./Completed";
import { addToCompleted } from "./Completed";


export let addingInput
export let removingInput


const Body = () => {
    
    let [input,setInput] = useState([])

    addingInput = (element) => {
        setInput((prevInput) => [...prevInput, element]);
      };

      removingInput=(element,flag)=>{
        setInput((prevInput)=>prevInput.filter((item)=>item!=element))
        if(flag){

          addToCompleted(element);
        }
      }

  return (
    <React.Fragment>
      <AddTask />
    <div className="list-task">
        {
       
        input.map((element)=>{
            console.log('elements',element);
         return <ListTasks task={element} />
         })
    }
        </div>
        <Completed />
    </React.Fragment>
  );
};


export default Body;