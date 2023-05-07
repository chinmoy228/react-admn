import React from "react";
import "./Chip.scss";

const Chip = (props) => {
  const { item } = props;
 
  return (
    <div>
      <label className="text-white" style={{backgroundColor: item.color}}>{item.text}</label>
    </div>
  );
};

export default Chip;
