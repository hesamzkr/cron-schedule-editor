export const padNumber = (num: number): string => {
  return num.toString().padStart(2, "0");
};

export const expandRange = (part: string): number[] => {
  if (part.includes("-")) {
    const [start, end] = part.split("-").map(Number);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
  return [Number(part)];
};

export const compressToRanges = (numbers: number[]): string => {
  if (numbers.length === 0) {
    return "*";
  }

  const sortedNums = [...numbers].sort((a, b) => a - b);
  const ranges: string[] = [];
  let rangeStart = sortedNums[0];
  let prev = rangeStart;

  for (let i = 1; i <= sortedNums.length; i++) {
    const current = sortedNums[i];
    if (current !== prev + 1) {
      // End of a range
      if (rangeStart === prev) {
        ranges.push(String(rangeStart));
      } else {
        ranges.push(`${rangeStart}-${prev}`);
      }
      rangeStart = current;
    }
    prev = current;
  }

  return ranges.join(",");
};
