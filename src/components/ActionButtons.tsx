import { useSaveCron } from "../hooks/useSaveCron";
import { useLoadCron } from "../hooks/useLoadCron";

function ActionButtons() {
  const { saveCron } = useSaveCron();
  const { loadCron } = useLoadCron();

  return (
    <div className="mt-6 flex justify-center gap-6">
      <button
        onClick={loadCron}
        className="px-6 py-3 cursor-pointer bg-gray-200 rounded-lg hover:bg-gray-300 font-medium min-w-[100px]"
      >
        Load
      </button>
      <button
        onClick={saveCron}
        className="px-6 py-3 cursor-pointer bg-gray-200 rounded-lg hover:bg-gray-300 font-medium min-w-[100px]"
      >
        Save
      </button>
    </div>
  );
}

export default ActionButtons;
