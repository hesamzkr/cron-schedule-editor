import { create } from "zustand";

export type ScheduleType = "weekly" | "daily" | "monthly" | "custom";

interface CronStore {
  scheduleType: ScheduleType;
  setScheduleType: (scheduleType: ScheduleType) => void;

  determineScheduleType: () => void;

  cronExpression: string;
  setCronExpression: (cronExpression: string) => void;

  monthDays: number[];
  toggleMonthDay: (monthDay: number) => void;
  setMonthDays: (monthDays: number[]) => void;

  weekDays: number[];
  toggleWeekDay: (weekDay: number) => void;
  setWeekDays: (weekDays: number[]) => void;

  repeatingMinutes: number | undefined;
  setRepeatingMinutes: (minutes: number | undefined) => void;

  times: string[];
  setTimes: (times: string[]) => void;
}

export const useCronStore = create<CronStore>((set, get) => ({
  scheduleType: "custom",
  setScheduleType: (scheduleType) => {
    switch (scheduleType) {
      case "weekly":
        set({ monthDays: [], scheduleType });
        break;
      case "daily":
        set({ weekDays: [], monthDays: [], scheduleType });
        break;
      case "monthly":
        set({ weekDays: [], repeatingMinutes: undefined, scheduleType });
        break;
      case "custom":
        set({ scheduleType });
        break;
    }
  },

  determineScheduleType: () => {
    const state = get();
    if (state.weekDays.length === 0 && state.monthDays.length === 0) {
      set({ scheduleType: "daily" });
    } else if (state.repeatingMinutes === undefined && state.weekDays.length === 0) {
      set({ scheduleType: "monthly" });
    } else if (state.monthDays.length === 0) {
      set({ scheduleType: "weekly" });
    } else {
      set({ scheduleType: "custom" });
    }
  },

  cronExpression: "* * * * *",
  setCronExpression: (cronExpression) => set({ cronExpression }),

  monthDays: [],
  toggleMonthDay: (monthDay) =>
    set((state) => ({
      monthDays: state.monthDays.includes(monthDay)
        ? state.monthDays.filter((day) => day !== monthDay)
        : [...state.monthDays, monthDay],
    })),
  setMonthDays: (monthDays) => set({ monthDays }),

  weekDays: [],
  toggleWeekDay: (weekDay) =>
    set((state) => ({
      weekDays: state.weekDays.includes(weekDay)
        ? state.weekDays.filter((day) => day !== weekDay)
        : [...state.weekDays, weekDay],
    })),
  setWeekDays: (weekDays) => set({ weekDays }),

  repeatingMinutes: undefined,
  setRepeatingMinutes: (minutes) => set({ repeatingMinutes: minutes }),

  times: [""],
  setTimes: (times) => set({ times }),
}));
