export const expandRange = (part: string): number[] => {
  if (part.includes("-")) {
    const [start, end] = part.split("-").map(Number);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
  return [Number(part)];
};
