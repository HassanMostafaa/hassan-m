// src/utils/padNumber.ts
export const padNumber = (value: number, length = 2): string =>
  String(Math.trunc(Math.abs(value))).padStart(length, "0");
