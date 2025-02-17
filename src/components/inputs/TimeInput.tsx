import { useCronStore } from "../../stores/CronStore";

function TimeInput() {
  const { times, setTimes } = useCronStore();

  const addSecondTime = () => {
    if (times.length < 2) {
      setTimes([...times, undefined]);
    }
  };

  const removeSecondTime = () => {
    setTimes([times[0]]);
  };

  const updateTime = (index: number, value: string) => {
    const newTimes = [...times];
    newTimes[index] = value;
    setTimes(newTimes);
  };

  return (
    <div className="flex items-center gap-2">
      <span>Exactly At</span>
      {times.map((time, index) => (
        <input
          key={index}
          type="time"
          className="form-input border rounded px-2 py-1"
          value={time || ""}
          onChange={(e) => updateTime(index, e.target.value)}
        />
      ))}
      {times.length === 1 ? (
        <button
          type="button"
          onClick={addSecondTime}
          className="w-8 h-8 rounded-full text-sm flex items-center justify-center bg-gray-100 hover:bg-gray-200"
        >
          +
        </button>
      ) : (
        <button
          type="button"
          onClick={removeSecondTime}
          className="w-8 h-8 rounded-full text-sm flex items-center justify-center bg-gray-100 hover:bg-gray-200"
        >
          -
        </button>
      )}
    </div>
  );
}

export default TimeInput;
