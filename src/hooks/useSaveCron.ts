import { useCronStore } from "../stores/CronStore";

export const useSaveCron = () => {
  const { setCronExpression, monthDays, weekDays, minutes, times } = useCronStore();

  const convertTimeToCron = () => {
    if (minutes === undefined) {
      const mins = times.map((time) => `${time?.split(":")[1]}`).join(",");
      const hours = times.map((time) => `${time?.split(":")[0]}`).join(",");
      return `${mins} ${hours}`;
    } else {
      return `*/${minutes} *`;
    }
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
