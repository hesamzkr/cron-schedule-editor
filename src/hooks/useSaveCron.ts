import { useCronStore } from "../stores/CronStore";

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
    if (monthDays.length === 0) {
      return "*";
    } else {
      return monthDays.join(",");
    }
  };

  const convertDaysInWeekToCron = () => {
    if (weekDays.length === 0) {
      return "*";
    } else {
      return weekDays.join(",");
    }
  };

  const saveCron = () => {
    const cron = `${convertTimeToCron()} ${convertDaysInMonthToCron()} * ${convertDaysInWeekToCron()}`;
    setCronExpression(cron);
  };

  return { saveCron };
};
