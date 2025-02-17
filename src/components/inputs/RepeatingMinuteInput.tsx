import { useCronStore } from "../../stores/CronStore";

function RepeatingMinuteInput() {
  const { minutes, setMinutes } = useCronStore();

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setMinutes(undefined);
    } else {
      const numberValue = Number(value);
      if (!isNaN(numberValue)) {
        setMinutes(numberValue);
      }
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span>Every</span>
      <input
        className="form-input border w-20 rounded px-2 py-1"
        value={minutes === undefined ? "" : minutes}
        onChange={handleMinutesChange}
      />
      <span>Minutes</span>
    </div>
  );
}

export default RepeatingMinuteInput;
