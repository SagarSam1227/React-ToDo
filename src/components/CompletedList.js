import React from "react";
import { checked } from "./constants";
import { removeFromCompleted } from "./Completed";


const CompletedList = ({value}) => {

  return (
    <React.Fragment>
        <div className="task">
        <img onClick={(e)=>{
            console.log('seeett')
            removeFromCompleted(value);
        }} className="checkbox" src={checked}></img>
          <h4><s>{value}</s></h4>
        </div>
    </React.Fragment>
  );
};

export default CompletedList;
