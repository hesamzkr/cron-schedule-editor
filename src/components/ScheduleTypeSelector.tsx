interface ScheduleTypeSelectorProps {
  scheduleType: "weekly" | "daily" | "monthly" | "custom";
  onTypeChange: (type: "weekly" | "daily" | "monthly" | "custom") => void;
}

function ScheduleTypeSelector({ scheduleType, onTypeChange }: ScheduleTypeSelectorProps) {
  const scheduleTypes = ["weekly", "daily", "monthly", "custom"] as const;

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
              onChange={() => onTypeChange(type)}
            />
            <span className="ml-2">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default ScheduleTypeSelector;
