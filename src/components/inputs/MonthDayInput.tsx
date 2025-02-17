import { useState } from "react";

function MonthDayInput() {
  const [selectedDays, setSelectedDays] = useState<number[]>([]);

  const toggleDay = (day: number) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day].sort((a, b) => a - b)
    );
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span>Days In Month:</span>
        {selectedDays.length === 0 && <span className="text-gray-500">Every day</span>}
        {selectedDays.length > 0 && (
          <span className="text-gray-700">{selectedDays.join(", ")}</span>
        )}
      </div>
      <div className="flex flex-wrap gap-1 max-w-2xl">
        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
          <button
            key={day}
            onClick={() => toggleDay(day)}
            className={`w-8 h-8 rounded-full text-sm flex items-center justify-center
              ${
                selectedDays.includes(day)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
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
