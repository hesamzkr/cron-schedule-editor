import { useState } from "react";
import ScheduleTypeSelector from "./components/ScheduleTypeSelector";
import ScheduleInputs from "./components/ScheduleInputs";
import ActionButtons from "./components/ActionButtons";
import ExpressionDisplay from "./components/ExpressionDisplay";

function App() {
  const [scheduleType, setScheduleType] = useState<"weekly" | "daily" | "monthly" | "custom">(
    "weekly"
  );
  const [cronExpression, setCronExpression] = useState("0 23 ? * MON-FRI");

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Cron Schedule</h2>

        <div className="flex gap-32">
          <ScheduleTypeSelector scheduleType={scheduleType} onTypeChange={setScheduleType} />
          <ScheduleInputs scheduleType={scheduleType} />
        </div>

        {/* Divider */}
        <hr className="mt-16 border-gray-200" />

        <ActionButtons onLoad={() => {}} onSave={() => {}} />
        <ExpressionDisplay expression={cronExpression} onChange={setCronExpression} />
      </div>
    </div>
  );
}

export default App;
