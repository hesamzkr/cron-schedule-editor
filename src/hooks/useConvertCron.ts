import { useCronStore } from "../stores/CronStore";

export const useConvertCron = () => {
  const { setCronExpression, monthDays, weekDays, minutes, times } = useCronStore();

  const convertTimeToCron = () => {
    if (minutes === undefined) {
      return times.map((time) => `${time?.split(":")[1]} ${time?.split(":")[0]}`).join(",");
    } else {
      return `*/${minutes}`;
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

  const loadCron = () => {
    console.log("Load cron");
  };

  return { saveCron, loadCron };
};
