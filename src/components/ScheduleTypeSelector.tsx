import { ScheduleType, useCronStore } from "../stores/CronStore";

function ScheduleTypeSelector() {
  const { scheduleType, setScheduleType } = useCronStore();

  const scheduleTypes: ScheduleType[] = ["weekly", "daily", "monthly", "custom"];

  return (
    <div className="space-y-2">
      {scheduleTypes.map((type) => (
        <div key={type}>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="schedule"
              checked={scheduleType === type}
              onChange={() => setScheduleType(type)}
            />
            <span className="ml-2">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default ScheduleTypeSelector;
