import { useCronStore } from "../../stores/CronStore";

function MonthDayInput() {
  const { monthDays, toggleMonthDay } = useCronStore();

  const handleToggleDay = (day: number) => {
    toggleMonthDay(day);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span>Days In Month:</span>
        {monthDays.length === 0 && <span className="text-gray-500">Every day</span>}
        {monthDays.length > 0 && <span className="text-gray-700">{monthDays.join(", ")}</span>}
      </div>
      <div className="flex flex-wrap gap-1 max-w-2xl">
        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
          <button
            key={day}
            onClick={() => handleToggleDay(day)}
            className={`w-8 h-8 rounded-full text-sm flex items-center justify-center
              ${
                monthDays.includes(day) ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MonthDayInput;
