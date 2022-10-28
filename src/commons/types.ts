import dayjs from "dayjs";
import React from "react";

export type WeekDaysProps = {
  today: dayjs.Dayjs;
  weekDays: dayjs.Dayjs[];
}

export type DateItemProps = {
  minName: string;
  active: string;
  customDay: string;
  day: dayjs.Dayjs;
  handleClick: (event: React.MouseEvent, date: dayjs.Dayjs) => void
}