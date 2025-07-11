import { convertTemperature } from "@/utils/temperature"

describe("Temperature Utils", () => {
  it("converts celsius to fahrenheit correctly", () => {
    expect(convertTemperature(0, "fahrenheit")).toBe(32)
    expect(convertTemperature(25, "fahrenheit")).toBe(77)
    expect(convertTemperature(100, "fahrenheit")).toBe(212)
  })

  it("returns celsius when unit is celsius", () => {
    expect(convertTemperature(25, "celsius")).toBe(25)
    expect(convertTemperature(0, "celsius")).toBe(0)
  })
})
