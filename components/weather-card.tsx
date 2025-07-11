"use client"

import type React from "react"
import { Cloud, Sun } from "lucide-react"
import type { WeatherData } from "@/types/weather"
import { convertTemperature } from "@/utils/temperature"

interface WeatherCardProps {
  weatherData: WeatherData
  unit: "celsius" | "fahrenheit"
  isDarkMode: boolean
}

export function WeatherCard({ weatherData, unit, isDarkMode }: WeatherCardProps) {
  const currentTemp = convertTemperature(weatherData.current.temperature, unit)

  const getWeatherIcon = (condition: string) => {
    const style = { color: isDarkMode ? "#9ca3af" : "#facc15" }
    if (condition.toLowerCase().includes("cloud")) {
      return <Cloud size={48} style={{ ...style, color: "#d1d5db" }} />
    }
    return <Sun size={48} style={style} />
  }

  const cardStyle: React.CSSProperties = {
    padding: "1.5rem",
    borderRadius: "16px",
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "white",
    background: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.2)",
    border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  }

  return (
    <div style={cardStyle}>
      <div style={{ marginBottom: "1rem" }}>{getWeatherIcon(weatherData.current.condition)}</div>
      <div style={{ fontSize: "3.5rem", fontWeight: 300, lineHeight: 1 }}>
        {currentTemp}°
        <span style={{ fontSize: "1.5rem", verticalAlign: "super", marginLeft: "0.2rem" }}>
          {unit === "celsius" ? "C" : "F"}
        </span>
      </div>
      <div style={{ fontSize: "1.125rem", textTransform: "capitalize", color: isDarkMode ? "#d1d5db" : "white" }}>
        {weatherData.current.condition}
      </div>
      <div
        style={{
          fontSize: "0.875rem",
          color: isDarkMode ? "#9ca3af" : "rgba(255, 255, 255, 0.8)",
          marginTop: "0.5rem",
        }}
      >
        Sensação: {convertTemperature(weatherData.current.feelsLike, unit)}°
      </div>
    </div>
  )
}
