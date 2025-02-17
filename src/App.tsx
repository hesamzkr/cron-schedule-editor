import ScheduleTypeSelector from "./components/ScheduleTypeSelector";
import ScheduleInputs from "./components/ScheduleInputs";
import ActionButtons from "./components/ActionButtons";
import ExpressionDisplay from "./components/ExpressionDisplay";

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Cron Schedule</h2>

        <div className="flex gap-32">
          <ScheduleTypeSelector />
          <ScheduleInputs />
        </div>

        <hr className="mt-16 border-gray-200" />

        <ActionButtons />
        <ExpressionDisplay />
      </div>
    </div>
  );
}

export default App;
