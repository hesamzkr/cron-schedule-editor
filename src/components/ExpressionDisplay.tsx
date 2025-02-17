interface ExpressionDisplayProps {
  expression: string;
  onChange: (expression: string) => void;
}

function ExpressionDisplay({ expression, onChange }: ExpressionDisplayProps) {
  return (
    <div className="mt-4">
      <input
        type="text"
        className="w-full border rounded px-3 py-2 bg-gray-50"
        value={expression}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default ExpressionDisplay;
