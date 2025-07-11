"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Sun, MapPin, RefreshCw } from "lucide-react"
import { WeatherCard } from "./weather-card"
import { WeeklyForecast } from "./weekly-forecast"
import { useWeatherData } from "@/hooks/use-weather-data"
import { CustomSpinner } from "./custom-spinner"
import { CustomSwitch } from "./custom-switch"
import { Notification } from "./notification"

export function WeatherApp() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedCity, setSelectedCity] = useState("São Paulo")
  const [unit, setUnit] = useState<"celsius" | "fahrenheit">("celsius")
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null)

  const { weatherData, loading, error, refetch } = useWeatherData(selectedCity)

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000)
      return () => clearTimeout(timer)
    }
  }, [notification])

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value)
  }

  const handleUnitToggle = () => {
    setUnit(unit === "celsius" ? "fahrenheit" : "celsius")
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => setNotification({ message: "Localização obtida com sucesso!", type: "success" }),
        () => setNotification({ message: "Erro ao obter localização", type: "error" }),
      )
    } else {
      setNotification({ message: "Geolocalização não suportada", type: "error" })
    }
  }

  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    transition: "background 0.3s ease",
    background: isDarkMode ? "#111827" : "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)",
    padding: "1.5rem 1rem",
  }

  const innerContainerStyle: React.CSSProperties = {
    maxWidth: "28rem",
    margin: "0 auto",
  }

  const cities = [
    "São Paulo",
    "Rio de Janeiro",
    "Brasília",
    "Salvador",
    "Fortaleza",
    "Belo Horizonte",
    "Manaus",
    "Curitiba",
    "Recife",
    "Porto Alegre",
  ]

  return (
    <div style={containerStyle}>
      {notification && <Notification message={notification.message} type={notification.type} />}
      <div style={innerContainerStyle}>
        <header
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <Sun size={24} style={{ color: "#fde047" }} />
            <CustomSwitch isChecked={isDarkMode} onChange={setIsDarkMode} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button onClick={getCurrentLocation} className="icon-button">
              <MapPin size={16} />
            </button>
            <button onClick={handleUnitToggle} className="text-button">
              {unit === "celsius" ? "°F" : "°C"}
            </button>
          </div>
        </header>

        <div style={{ marginBottom: "1.5rem" }}>
          <select value={selectedCity} onChange={handleCityChange} className="city-select">
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <div className="card-base" style={{ textAlign: "center", background: "white", color: "black" }}>
            <p style={{ color: "#ef4444", marginBottom: "1rem" }}>Erro ao carregar dados do clima</p>
            <button onClick={refetch} className="text-button" style={{ background: "#e5e7eb", color: "#1f2937" }}>
              <RefreshCw size={14} style={{ marginRight: "0.5rem" }} />
              Tentar novamente
            </button>
          </div>
        )}

        {loading && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "16rem" }}>
            <CustomSpinner />
          </div>
        )}

        {!loading && !error && weatherData && (
          <>
            <WeatherCard weatherData={weatherData} unit={unit} isDarkMode={isDarkMode} />
            <WeeklyForecast forecastData={weatherData.forecast} unit={unit} isDarkMode={isDarkMode} />
          </>
        )}
      </div>
      <style jsx>{`
        .icon-button,
        .text-button {
          background-color: transparent;
          border: 1px solid white;
          color: white;
          border-radius: 8px;
          padding: 0.25rem 0.5rem;
          cursor: pointer;
          font-size: 0.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
        }
        .icon-button:hover,
        .text-button:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .icon-button {
          padding: 0.4rem;
        }
        .city-select {
          width: 100%;
          padding: 0.75rem;
          border-radius: 12px;
          border: 1px solid #d1d5db;
          font-size: 1rem;
          background-color: white;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007AFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
          background-repeat: no-repeat;
          background-position: right 0.7em top 50%, 0 0;
          background-size: 0.65em auto, 100%;
        }
        .card-base {
          padding: 1.5rem;
          border-radius: 16px;
        }
      `}</style>
    </div>
  )
}
