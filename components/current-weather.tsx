"use client"

import type React from "react"
import { MapPin } from "lucide-react"
import type { SimplifiedWeatherData } from "@/types/weather"

interface CurrentWeatherProps {
  data: SimplifiedWeatherData
  city: string
  onCityChange: (city: string) => void
  cities: string[]
}

export function CurrentWeather({ data, city, onCityChange, cities }: CurrentWeatherProps) {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem 2.5rem",
    flexGrow: 1,
  }

  const infoBlockStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  }

  return (
    <div style={containerStyle}>
      <div style={infoBlockStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", position: "relative" }}>
          <MapPin size={16} />
          <select
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "uppercase",
              appearance: "none",
              cursor: "pointer",
              paddingRight: "1rem",
            }}
          >
            {cities.map((c) => (
              <option key={c} value={c} style={{ color: "black" }}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <span style={{ fontSize: "0.875rem", opacity: 0.8, marginLeft: "1.5rem" }}>
          {new Date(data.localtime).toLocaleDateString("en-US", { month: "short", day: "numeric" }).toUpperCase()}
        </span>
        <span style={{ fontSize: "4rem", fontWeight: 200, lineHeight: 1.1, marginTop: "0.5rem" }}>{data.time}</span>
        <span style={{ fontSize: "1rem", textTransform: "uppercase", letterSpacing: "1px", opacity: 0.9 }}>
          {data.current.condition}
        </span>
      </div>

      <div style={{ ...infoBlockStyle, alignItems: "flex-end", textAlign: "right" }}>
        <div style={{ fontSize: "0.8rem", opacity: 0.8, lineHeight: 1.4 }}>
          <p>PRESSURE: {data.current.pressure}hPa</p>
          <p>SUNRISE: {data.astro.sunrise}</p>
          <p>SUNSET: {data.astro.sunset}</p>
        </div>
        <div style={{ fontSize: "3.5rem", fontWeight: 200, marginTop: "1rem" }}>{Math.round(data.current.tempC)}°C</div>
      </div>
    </div>
  )
}
