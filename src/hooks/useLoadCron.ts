import { useCronStore } from "../stores/CronStore";
import { expandRange, padNumber } from "../utils/format";

export const useLoadCron = () => {
  const { cronExpression, setRepeatingMinutes, setTimes, setMonthDays, setWeekDays } =
    useCronStore();

  const convertCronToTime = (minutePart: string, hourPart: string) => {
    setRepeatingMinutes(undefined);
    const minutes = minutePart.split(",");
    const hours = hourPart.split(",").filter((hour) => hour !== "*");

    const exactMinutes = [];
    for (const minute of minutes) {
      if (minute.includes("*/")) {
        const intervalMinutes = minutePart.split("*/")[1];
        setRepeatingMinutes(Number(intervalMinutes));
      } else {
        const exactMinute = Number(minute);
        if (!isNaN(exactMinute)) {
          exactMinutes.push(exactMinute);
        }
      }
    }

    if (exactMinutes.length === 0 && hours.length === 0) {
      setTimes([""]);
      return;
    }

    // This is done in case the expression is in the format "30 9,15" or "30,45 10"
    // This cannot be created with our editor but still a valid cron expression
    const timesList = [];
    const maxLength = Math.max(exactMinutes.length, hours.length);
    for (let i = 0; i < maxLength; i++) {
      const hour = hours[i] || hours[0] || 0;
      const min = exactMinutes[i] || exactMinutes[0] || 0;

      timesList.push(`${padNumber(Number(hour))}:${padNumber(min)}`);
    }

    setTimes(timesList);
  };

  const convertCronToDaysInMonth = (dayMonthPart: string) => {
    if (dayMonthPart === "*") {
      setMonthDays([]);
      return;
    }

    const daysInMonth = dayMonthPart
      .split(",")
      .flatMap(expandRange)
      .filter((day) => !isNaN(day) && day >= 1 && day <= 31);
    setMonthDays(daysInMonth);
  };

  const convertCronToDaysInWeek = (dayWeekPart: string) => {
    if (dayWeekPart === "*") {
      setWeekDays([]);
      return;
    }

    const daysInWeek = dayWeekPart
      .split(",")
      .flatMap(expandRange)
      .filter((day) => !isNaN(day) && day >= 1 && day <= 7);
    setWeekDays(daysInWeek);
  };

  const loadCron = () => {
    try {
      const [minutePart, hourPart, dayMonthPart, _, dayWeekPart] = cronExpression.split(" ");

      convertCronToTime(minutePart, hourPart);
      convertCronToDaysInMonth(dayMonthPart);
      convertCronToDaysInWeek(dayWeekPart);
    } catch (error) {
      alert("Invalid cron expression");
    }
  };

  return { loadCron };
};
