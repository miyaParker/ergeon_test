import dayjs from "dayjs";
import { dayFormat, monthFormat, yearFormat } from "../commons/constants";

export const getCurrentWeekDays = (startOfWeek: number) => {
  const weekDays: dayjs.Dayjs[] = [];
  for (let day = 0; day < 7; day++) {
    weekDays.push(dayjs(startOfWeek).add(day, "day"));
  }
  return weekDays;
};

export const isToday = (today: dayjs.Dayjs, day: dayjs.Dayjs) => {
  if (today.format(dayFormat) === day.format(dayFormat) &&
    today.format(monthFormat) === day.format(monthFormat) &&
    today.format(yearFormat) === day.format(yearFormat)) return true;
  return false;
};