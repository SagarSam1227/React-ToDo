import React from "react";
import CompletedList from "./CompletedList";
import { arrow, arrowDown } from "./constants";
import { useState, useEffect } from "react";
import { addingInput } from "./body";


export let addToCompleted;
export let removeFromCompleted;

const Completed = () => {
  const [showList, setShowList] = useState();
  const [arrowImg, setArrowImg] = useState(arrow);
  const [completedData, setCompletedData] = useState([]);


  addToCompleted = (element) => {
    console.log("removing", element);
    setCompletedData((prevInput) => [...prevInput, element]);
  };

  removeFromCompleted = (element)=>{
    setCompletedData((prevInput)=>prevInput.filter((item)=>item!=element))
    addingInput(element);
  }

  useEffect(() => {
    if (arrowImg === arrowDown) {
      setShowList(
        <div className="completed-task">
          {completedData.map((element) => {
            return <CompletedList value={element} />;
          })}
        </div>
      );
    } else {
      setShowList(null);
    }
  }, [arrowImg, setShowList, completedData]);
  
  function checkingArrow() {
    if (arrowImg == arrow) {
        setArrowImg(arrowDown);
    } else {
        setArrowImg(arrow);
    }
  }

  return (
    <div className="complete-main">
      <img className="arrow" src={arrowImg}></img>
      <button
        onClick={(e) => {
          checkingArrow();
        }}
        className="completed"
      >
        Completed
      </button>
      {showList}
    </div>
  );
};

export default Completed;
