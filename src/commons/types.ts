import dayjs from "dayjs";
import React from "react";

export type WeekDaysProps = {
  today: dayjs.Dayjs;
  weekDays: dayjs.Dayjs[];
}

export type DateItemProps = {
  minName: string;
  active: string;
  selected: string;
  day: dayjs.Dayjs;
  handleClick: (event: React.MouseEvent, date: dayjs.Dayjs) => void;
}

export type HeaderProps = {
  day: dayjs.Dayjs;
  handleNextClick: (event: React.MouseEvent) => void;
  handlePrevClick: (event: React.MouseEvent) => void;
}