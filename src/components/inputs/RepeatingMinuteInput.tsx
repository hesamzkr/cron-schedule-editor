import { useCronStore } from "../../stores/CronStore";

function RepeatingMinuteInput() {
  const { repeatingMinutes, setRepeatingMinutes } = useCronStore();

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setRepeatingMinutes(undefined);
    } else {
      const numberValue = Number(value);
      if (!isNaN(numberValue)) {
        setRepeatingMinutes(numberValue);
      }
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span>Every</span>
      <input
        className="form-input border w-20 rounded px-2 py-1"
        value={repeatingMinutes === undefined ? "" : repeatingMinutes}
        onChange={handleMinutesChange}
      />
      <span>Minutes</span>
    </div>
  );
}

export default RepeatingMinuteInput;
