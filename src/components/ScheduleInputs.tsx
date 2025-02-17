interface ScheduleInputsProps {
  scheduleType: "weekly" | "daily" | "monthly" | "custom";
}

function ScheduleInputs({ scheduleType }: ScheduleInputsProps) {
  return (
    <div className="flex-1">
      {scheduleType === "weekly" && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span>Every Day</span>
            <select className="form-select border rounded px-2 py-1">
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span>At</span>
            <input type="time" className="form-input border rounded px-2 py-1" />
          </div>
        </div>
      )}

      {scheduleType === "daily" && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span>Each</span>
            <input
              type="number"
              className="form-input border rounded w-16 px-2 py-1"
              defaultValue="15"
            />
            <span>Minutes</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScheduleInputs;
