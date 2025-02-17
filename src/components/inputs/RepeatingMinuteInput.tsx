import { useState } from "react";

function RepeatingMinuteInput() {
  const [minutes, setMinutes] = useState<number | undefined>(undefined);

  return (
    <div className="flex items-center gap-2">
      <span>Every</span>
      <input
        className="form-input border w-20 rounded px-2 py-1"
        value={minutes}
        onChange={(e) => setMinutes(Number(e.target.value))}
      />
      <span>Minutes</span>
    </div>
  );
}

export default RepeatingMinuteInput;
