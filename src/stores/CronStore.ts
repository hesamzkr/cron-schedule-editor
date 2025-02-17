import { create } from "zustand";

export type ScheduleType = "weekly" | "daily" | "monthly" | "custom";

interface CronStore {
  scheduleType: ScheduleType;
  setScheduleType: (scheduleType: ScheduleType) => void;

  cronExpression: string;
  setCronExpression: (cronExpression: string) => void;

  monthDays: number[];
  toggleMonthDay: (monthDay: number) => void;

  weekDays: string[];
  toggleWeekDay: (weekDay: string) => void;

  minutes: number | undefined;
  setMinutes: (minutes: number | undefined) => void;

  times: (string | undefined)[];
  setTimes: (times: (string | undefined)[]) => void;
}

export const useCronStore = create<CronStore>((set) => ({
  scheduleType: "weekly",
  setScheduleType: (scheduleType) => set({ scheduleType }),

  cronExpression: "0 23 ? * MON-FRI",
  setCronExpression: (cronExpression) => set({ cronExpression }),

  monthDays: [],
  toggleMonthDay: (monthDay) =>
    set((state) => ({
      monthDays: state.monthDays.includes(monthDay)
        ? state.monthDays.filter((day) => day !== monthDay)
        : [...state.monthDays, monthDay],
    })),

  weekDays: [],
  toggleWeekDay: (weekDay) =>
    set((state) => ({
      weekDays: state.weekDays.includes(weekDay)
        ? state.weekDays.filter((day) => day !== weekDay)
        : [...state.weekDays, weekDay],
    })),

  minutes: undefined,
  setMinutes: (minutes) => set({ minutes }),

  times: [undefined],
  setTimes: (times) => set({ times }),
}));
