import { useCronStore } from "../stores/CronStore";
import { compressToRanges } from "../utils/format";

export const useSaveCron = () => {
  const { setCronExpression, monthDays, weekDays, repeatingMinutes, times } = useCronStore();

  const convertTimeToCron = () => {
    const validTimes = times.filter((time) => time.length > 0);
    const exactMinutes =
      validTimes.length > 0 ? validTimes.map((time) => time.split(":")[1]).join(",") : "";
    const hours =
      validTimes.length > 0 ? validTimes.map((time) => time.split(":")[0]).join(",") : "*";

    if (!exactMinutes && !repeatingMinutes) {
      return `* ${hours}`;
    }

    let minutesPart = exactMinutes || "";
    if (repeatingMinutes) {
      if (exactMinutes) {
        minutesPart += ",";
      }
      minutesPart += `*/${repeatingMinutes}`;
    }

    return `${minutesPart} ${hours}`;
  };

  const convertDaysInMonthToCron = () => {
    return compressToRanges(monthDays);
  };

  const convertDaysInWeekToCron = () => {
    return compressToRanges(weekDays);
  };

  const saveCron = () => {
    const cron = `${convertTimeToCron()} ${convertDaysInMonthToCron()} * ${convertDaysInWeekToCron()}`;
    setCronExpression(cron);
  };

  return { saveCron };
};
