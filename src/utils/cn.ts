import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: string[]): string => {
  return twMerge(clsx(args));
};
