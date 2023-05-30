import React from "react";
import { addIcon } from "./constants";
import { useState, useEffect } from "react";
import { addingInput } from "./body";

const AddTask = () => {
  const [singleTask, setSingleTask] = useState();

  return (
    <div>
      <input
        onChange={(e) => {
          setSingleTask(e.target.value);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            if (singleTask) {
              addingInput(singleTask);
              document.getElementById("input-flag").value = null;
              setSingleTask(null)
            }
          }
        }}
        className="add-task"
        id="input-flag"
        placeholder="    add a task...."
      ></input>
      <img
        onClick={() => {
          console.log("firstt", singleTask);
          addingInput(singleTask);
          document.getElementById("input-flag").value = null;
        }}
        className="add-icon"
        src={addIcon}
      ></img>
    </div>
  );
};

export default AddTask;
