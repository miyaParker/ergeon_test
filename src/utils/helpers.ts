import dayjs from "dayjs";

export const generateCurrentWeekDays = (startOfWeek:number) => {
    // const startOfWeek = dayjs().startOf("week");
    const weekDays: dayjs.Dayjs[] = [];
    for (let day = 0; day < 7; day++) {
        weekDays.push(dayjs(startOfWeek).add(day, "day"))
    }
    return weekDays
}
