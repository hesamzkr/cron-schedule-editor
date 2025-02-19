import { useCronStore } from "../stores/CronStore";

export const useLoadCron = () => {
  const { cronExpression, setMinutes, setTimes, setMonthDays, setWeekDays } = useCronStore();

  const convertCronToTime = (minutePart: string, hourPart: string) => {
    if (minutePart.includes("*/")) {
      const intervalMinutes = minutePart.split("*/")[1];
      setMinutes(Number(intervalMinutes));
    } else {
      const minutes = minutePart.split(",");
      const hours = hourPart.split(",");
      const timesList = [];

      // This is done in case the expression is in the format "30 9,15" or "30,45 10"
      // This cannot be created with our editor but still a valid cron expression
      const maxLength = Math.max(minutes.length, hours.length);
      for (let i = 0; i < maxLength; i++) {
        const hour = hours[i] || hours[0];
        const min = minutes[i] || minutes[0];
        timesList.push(`${hour}:${min}`);
      }

      setTimes(timesList);
    }
  };

  const convertCronToDaysInMonth = (dayMonthPart: string) => {
    const daysInMonth = dayMonthPart === "*" ? [] : dayMonthPart.split(",").map(Number);
    setMonthDays(daysInMonth);
  };

  const convertCronToDaysInWeek = (dayWeekPart: string) => {
    const daysInWeek = dayWeekPart === "*" ? [] : dayWeekPart.split(",").map(Number);
    setWeekDays(daysInWeek);
  };

  const loadCron = () => {
    const [minutePart, hourPart, dayMonthPart, _, dayWeekPart] = cronExpression.split(" ");

    convertCronToTime(minutePart, hourPart);
    convertCronToDaysInMonth(dayMonthPart);
    convertCronToDaysInWeek(dayWeekPart);
  };

  return { loadCron };
};
