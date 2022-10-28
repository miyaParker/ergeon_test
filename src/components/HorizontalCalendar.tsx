import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getCurrentWeekDays } from "../utils/helpers";
import WeekDays from "./WeekDays";
import prevIcon from "../assets/prev.png";
import nextIcon from "../assets/next.png";
import { monthStringFormat, today, yearFormat } from "../commons/constants";

const HorizontalCalendar = () => {
  const [day, setDay] = useState(dayjs());
  const [weekDays, setWeekDays] = useState<dayjs.Dayjs[]>(getCurrentWeekDays(+day.startOf("week")));


  const handleNextClick = () => setDay(day.add(7, "day"));
  const handlePrevClick = () => setDay(day.subtract(7, "day"));

  useEffect(() => {
    setWeekDays(getCurrentWeekDays(+day.startOf("week")));
  }, [day]);

  return (
    <div className="calendar">
      <div className="header" style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 className="month">{day.format(monthStringFormat)} {day.format(yearFormat)}</h3>
        <div className="nav">
                    <span className="btn prev">
                        <img src={prevIcon} alt="next weekdays" onClick={handlePrevClick} />
                    </span>
          <span className="btn next">
                        <img src={nextIcon} alt="prev weekdays" onClick={handleNextClick} />
                    </span>
        </div>

      </div>
      <WeekDays today={today} weekDays={weekDays} />
    </div>

  );
};
export default HorizontalCalendar;