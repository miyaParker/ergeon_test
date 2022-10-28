import dayjs from "dayjs";
import React from "react";

const DateItem = ({
                      minName,
                      day,
                      active,
                      customDay,
                      handleClick,
                  }: { minName: string, day: dayjs.Dayjs, active: string, customDay: string, handleClick: (event: React.MouseEvent, date: dayjs.Dayjs) => void, }) => {

    return (
        <div>
            <h4 className="min_name">{minName}</h4>
            <p className={`day ${active} ${customDay}`}
               onClick={(e) => handleClick(e, day)}
            >{day.format("D")}</p>
        </div>
    )
}

export default DateItem