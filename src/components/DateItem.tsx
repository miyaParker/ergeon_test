import React from "react";
import { DateItemProps } from "../commons/types";
import { dayFormat } from "../commons/constants";

const DateItem = ({ minName, day, active, customDay, handleClick }: DateItemProps) => {

  return (
    <div>
      <h4 className="min_name">{minName}</h4>
      <p className={`day ${active} ${customDay}`}
         onClick={(e) => handleClick(e, day)}
      >{day.format(dayFormat)}</p>
    </div>
  );
};

export default DateItem;