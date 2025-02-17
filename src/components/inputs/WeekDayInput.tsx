import { useState } from "react";

function WeekDayInput() {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const handleDayToggle = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span>Days Of Week:</span>
        {selectedDays.length === 0 && <span className="text-gray-500">Every day</span>}
        {selectedDays.length > 0 && (
          <span className="text-gray-700">{selectedDays.join(", ")}</span>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {weekDays.map((day) => (
          <button
            key={day}
            onClick={() => handleDayToggle(day)}
            className={`px-3 py-2 rounded-full text-sm flex items-center justify-center
              ${
                selectedDays.includes(day)
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
