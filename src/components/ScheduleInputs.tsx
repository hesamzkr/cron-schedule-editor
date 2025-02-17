import MonthDayInput from "./inputs/MonthDayInput";
import RepeatingMinuteInput from "./inputs/RepeatingMinuteInput";
import TimeInput from "./inputs/TimeInput";
import WeekDayInput from "./inputs/WeekDayInput";

interface ScheduleInputsProps {
  scheduleType: "weekly" | "daily" | "monthly" | "custom";
}

function ScheduleInputs({ scheduleType }: ScheduleInputsProps) {
  return (
    <div className="flex-1">
      {scheduleType === "weekly" && (
        <div className="space-y-4">
          <WeekDayInput />
          <TimeInput />
          <RepeatingMinuteInput />
        </div>
      )}

      {scheduleType === "daily" && (
        <div className="space-y-4">
          <TimeInput />
          <RepeatingMinuteInput />
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
