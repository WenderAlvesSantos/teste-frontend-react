export function convertTemperature(celsius: number, unit: "celsius" | "fahrenheit"): number {
  if (unit === "fahrenheit") {
    return Math.round((celsius * 9) / 5 + 32)
  }
  return Math.round(celsius)
}
