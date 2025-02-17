import { useCronStore } from "../../stores/CronStore";

function WeekDayInput() {
  const { weekDays, toggleWeekDay } = useCronStore();

  const allWeekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleDayToggle = (dayIndex: number) => {
    toggleWeekDay(dayIndex);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span>Days Of Week:</span>
        {weekDays.length === 0 && <span className="text-gray-500">Every day</span>}
        {weekDays.length > 0 && <span className="text-gray-700">{weekDays.join(", ")}</span>}
      </div>
      <div className="flex flex-wrap gap-2">
        {allWeekDays.map((day, index) => (
          <button
            key={day}
            onClick={() => handleDayToggle(index)}
            className={`px-3 py-2 rounded-full text-sm flex items-center justify-center
              ${
                weekDays.includes(index)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            {day.slice(0, 3)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WeekDayInput;
