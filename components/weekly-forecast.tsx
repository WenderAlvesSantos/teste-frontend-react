"use client"

import type React from "react"
import { Cloud, Sun, CloudRain, CloudSnow, CloudSun } from "lucide-react"
import type { SimplifiedWeatherData } from "@/types/weather"

interface WeeklyForecastProps {
  data: SimplifiedWeatherData["forecast"]
}

export function WeeklyForecast({ data }: WeeklyForecastProps) {
  const containerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    background: "rgba(25, 66, 130, 0.6)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderTop: "1px solid rgba(255, 255, 255, 0.15)",
    padding: "1rem 0",
  }

  const dayStyle: React.CSSProperties = {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    borderRight: "1px solid rgba(255, 255, 255, 0.1)",
  }

  const getWeatherIcon = (condition: string) => {
    const props = { size: 28, color: "white", strokeWidth: 1.5 }
    const lowerCaseCondition = condition.toLowerCase()
    if (lowerCaseCondition.includes("rain") || lowerCaseCondition.includes("drizzle")) return <CloudRain {...props} />
    if (lowerCaseCondition.includes("snow") || lowerCaseCondition.includes("sleet")) return <CloudSnow {...props} />
    if (lowerCaseCondition.includes("sunny")) return <Sun {...props} color="#FFD700" />
    if (lowerCaseCondition.includes("partly cloudy")) return <CloudSun {...props} />
    if (lowerCaseCondition.includes("cloudy") || lowerCaseCondition.includes("overcast")) return <Cloud {...props} />
    return <Sun {...props} color="#FFD700" />
  }

  return (
    <div style={containerStyle}>
      {data.map((day, index) => (
        <div
          key={day.date}
          style={{ ...dayStyle, borderRight: index === data.length - 1 ? "none" : dayStyle.borderRight }}
        >
          <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>{day.dayName}</span>
          {getWeatherIcon(day.condition)}
          <div>
            <span style={{ fontSize: "1rem", fontWeight: 500 }}>{Math.round(day.maxTempC)}°</span>
            <span style={{ fontSize: "0.875rem", opacity: 0.7, marginLeft: "0.25rem" }}>
              {Math.round(day.minTempC)}°
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
