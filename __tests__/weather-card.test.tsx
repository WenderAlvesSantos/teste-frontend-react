import { render, screen } from "@testing-library/react"
import { WeatherCard } from "@/components/weather-card"
import type { WeatherData } from "@/types/weather"

const mockWeatherData: WeatherData = {
  city: "São Paulo",
  current: {
    temperature: 25,
    condition: "sunny",
    feelsLike: 27,
    humidity: 60,
    windSpeed: 10,
  },
  forecast: [],
}

describe("WeatherCard", () => {
  it("renders current temperature correctly", () => {
    render(<WeatherCard weatherData={mockWeatherData} unit="celsius" isDarkMode={false} />)

    expect(screen.getByText("25°C")).toBeInTheDocument()
  })

  it("converts temperature to fahrenheit", () => {
    render(<WeatherCard weatherData={mockWeatherData} unit="fahrenheit" isDarkMode={false} />)

    expect(screen.getByText("77°F")).toBeInTheDocument()
  })

  it("displays weather condition", () => {
    render(<WeatherCard weatherData={mockWeatherData} unit="celsius" isDarkMode={false} />)

    expect(screen.getByText("sunny")).toBeInTheDocument()
  })
})
