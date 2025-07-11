"use client"

import type React from "react"
import { useState } from "react"
import { useWeatherData } from "@/hooks/use-weather-data"
import { CurrentWeather } from "./current-weather"
import { WeeklyForecast } from "./weekly-forecast"
import { CustomSpinner } from "./custom-spinner"

const getBackgroundImage = (condition: string, isDay: boolean): string => {
  const lowerCaseCondition = condition.toLowerCase()
  if (lowerCaseCondition.includes("rain") || lowerCaseCondition.includes("drizzle")) {
    return "/bg-rain.png"
  }
  if (!isDay) {
    return "/bg-night.png"
  }
  return "/bg-day.png"
}

export function WeatherWidget() {
  const [selectedCity, setSelectedCity] = useState("São Paulo")
  const { weatherData, loading, error, refetch } = useWeatherData(selectedCity)

  const widgetStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "700px",
    aspectRatio: "16 / 9",
    borderRadius: "24px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    color: "white",
    fontFamily: "'Segoe UI', sans-serif",
    textShadow: "0 1px 3px rgba(0, 0, 0, 0.25)",
  }

  const backgroundStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1,
    transition: "background-image 0.5s ease-in-out",
  }

  const cities = ["Brasília", "London", "New York", "Rio de Janeiro", "São Paulo", "Sydney", "Tokyo"]

  const backgroundUrl = weatherData
    ? getBackgroundImage(weatherData.current.condition, weatherData.isDay)
    : "/bg-day.png"

  return (
    <div style={widgetStyle}>
      <img src={backgroundUrl || "/placeholder.svg"} alt="Plano de fundo dinâmico do clima" style={backgroundStyle} />

      <div style={{ position: "relative", zIndex: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
        {loading ? (
          <div style={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CustomSpinner />
          </div>
        ) : error || !weatherData ? (
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
              textAlign: "center",
              background: "rgba(0,0,0,0.5)",
            }}
          >
            <div>
              <p style={{ color: "#fca5a5", marginBottom: "1rem" }}>{error}</p>
              <button
                onClick={refetch}
                style={{
                  padding: "0.5rem 1rem",
                  border: "1px solid white",
                  borderRadius: "8px",
                  background: "transparent",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Tentar Novamente
              </button>
            </div>
          </div>
        ) : (
          <>
            <CurrentWeather data={weatherData} city={selectedCity} onCityChange={setSelectedCity} cities={cities} />
            <WeeklyForecast data={weatherData.forecast} />
          </>
        )}
      </div>
    </div>
  )
}
