import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "INR";
    notation?: Intl.NumberFormatOptions["notation"];
  } = {}
) {
  const { currency = "INR", notation = "compact" } = options;
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  const numberFormatOptions: Intl.NumberFormatOptions = {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  };

  return new Intl.NumberFormat("en-IN", numberFormatOptions).format(
    numericPrice
  );
}
