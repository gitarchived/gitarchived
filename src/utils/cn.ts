import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const cn = (...args: string[]): string => {
  return twMerge(clsx(args));
};
