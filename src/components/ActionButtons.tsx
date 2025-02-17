function ActionButtons() {
  const onLoad = () => {
    console.log("Load");
  };

  const onSave = () => {
    console.log("Save");
  };

  return (
    <div className="mt-6 flex justify-center gap-6">
      <button
        onClick={onLoad}
        className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 font-medium min-w-[100px]"
      >
        Load
      </button>
      <button
        onClick={onSave}
        className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 font-medium min-w-[100px]"
      >
        Save
      </button>
    </div>
  );
}

export default ActionButtons;
