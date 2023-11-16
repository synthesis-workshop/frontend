// Formats a number using compact format, i.e:
// 800201 => 800k
// 8002010 => 8M
// 8102010 => 8.1M
export const kFormat = (num: number): string => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(num);
};
