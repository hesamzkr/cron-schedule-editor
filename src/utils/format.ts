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
