import { useCronStore } from "../stores/CronStore";

function ExpressionDisplay() {
  const { cronExpression, setCronExpression } = useCronStore();

  return (
    <div className="mt-4">
      <input
        type="text"
        className="w-full border rounded px-3 py-2 bg-gray-50"
        value={cronExpression}
        onChange={(e) => setCronExpression(e.target.value)}
      />
    </div>
  );
}

export default ExpressionDisplay;
