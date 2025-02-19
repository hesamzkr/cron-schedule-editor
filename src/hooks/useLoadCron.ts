import { useCronStore } from "../stores/CronStore";

export const useLoadCron = () => {
  const { cronExpression, setRepeatingMinutes, setTimes, setMonthDays, setWeekDays } =
    useCronStore();

  const convertCronToTime = (minutePart: string, hourPart: string) => {
    const minutes = minutePart.split(",");
    const hours = hourPart.split(",");

    const exactMinutes = [];
    for (const minute of minutes) {
      if (minute.includes("*/")) {
        const intervalMinutes = minutePart.split("*/")[1];
        setRepeatingMinutes(Number(intervalMinutes));
      } else {
        exactMinutes.push(minute);
      }
    }

    // This is done in case the expression is in the format "30 9,15" or "30,45 10"
    // This cannot be created with our editor but still a valid cron expression
    const timesList = [];
    const maxLength = Math.max(exactMinutes.length, hours.length);
    for (let i = 0; i < maxLength; i++) {
      const hour = hours[i] || hours[0];
      const min = exactMinutes[i] || exactMinutes[0];
      timesList.push(`${hour}:${min}`);
    }

    setTimes(timesList);
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
