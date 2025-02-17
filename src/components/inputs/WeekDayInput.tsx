import { useCronStore } from "../../stores/CronStore";

function WeekDayInput() {
  const { weekDays, toggleWeekDay } = useCronStore();

  const allWeekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleDayToggle = (day: string) => {
    toggleWeekDay(day);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span>Days Of Week:</span>
        {weekDays.length === 0 && <span className="text-gray-500">Every day</span>}
        {weekDays.length > 0 && <span className="text-gray-700">{weekDays.join(", ")}</span>}
      </div>
      <div className="flex flex-wrap gap-2">
        {allWeekDays.map((day) => (
          <button
            key={day}
            onClick={() => handleDayToggle(day)}
            className={`px-3 py-2 rounded-full text-sm flex items-center justify-center
              ${
                weekDays.includes(day) ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
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
