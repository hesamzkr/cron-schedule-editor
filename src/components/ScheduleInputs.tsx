import MonthDayInput from "./inputs/MonthDayInput";
import RepeatingMinuteInput from "./inputs/RepeatingMinuteInput";
import TimeInput from "./inputs/TimeInput";
import WeekDayInput from "./inputs/WeekDayInput";
import { useCronStore } from "../stores/CronStore";

function ScheduleInputs() {
  const { scheduleType } = useCronStore();

  return (
    <div className="flex-1">
      {scheduleType === "weekly" && (
        <div className="space-y-4">
          <WeekDayInput />
          <RepeatingMinuteInput />
          <TimeInput />
        </div>
      )}

      {scheduleType === "daily" && (
        <div className="space-y-4">
          <RepeatingMinuteInput />
          <TimeInput />
        </div>
      )}

      {scheduleType === "monthly" && (
        <div className="space-y-4">
          <MonthDayInput />
          <TimeInput />
        </div>
      )}

      {scheduleType === "custom" && (
        <div className="space-y-4">
          <WeekDayInput />
          <MonthDayInput />
          <RepeatingMinuteInput />
          <TimeInput />
        </div>
      )}
    </div>
  );
}

export default ScheduleInputs;
