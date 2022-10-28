import React from "react";
import { DateItemProps } from "../commons/types";
import { dayFormat } from "../commons/constants";

const DateItem = ({ minName, day, active, selected, handleClick }: DateItemProps) => {

  return (
    <div>
      <h4 className="min_name">{minName}</h4>
      <p className={`day ${active} ${selected}`}
         onClick={(e) => handleClick(e, day)}
      >{day.format(dayFormat)}</p>
    </div>
  );
};

export default DateItem;