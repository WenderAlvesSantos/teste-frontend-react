"use client"

import { useState, useEffect, useCallback } from "react"
import type { SimplifiedWeatherData, WeatherApiResponse } from "@/types/weather"

// Função para transformar a resposta da API na nossa estrutura de dados simplificada
const transformWeatherData = (data: WeatherApiResponse): SimplifiedWeatherData => {
  const forecastDays = data.forecast.forecastday.map((day) => ({
    date: day.date,
    dayName: new Date(day.date + "T00:00:00") // Evita problemas de fuso
      .toLocaleDateString("en-US", { weekday: "short" })
      .toUpperCase(),
    maxTempC: day.day.maxtemp_c,
    minTempC: day.day.mintemp_c,
    condition: day.day.condition.text,
  }))

  return {
    city: data.location.name,
    country: data.location.country,
    time: data.location.localtime.split(" ")[1],
    localtime: data.location.localtime, // Passando o localtime completo
    isDay: data.current.is_day === 1,
    current: {
      tempC: data.current.temp_c,
      condition: data.current.condition.text,
      pressure: data.current.pressure_mb,
    },
    forecast: forecastDays,
    astro: {
      sunrise: data.forecast.forecastday[0].astro.sunrise,
      sunset: data.forecast.forecastday[0].astro.sunset,
    },
  }
}

export function useWeatherData(city: string) {
  const [weatherData, setWeatherData] = useState<SimplifiedWeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchWeatherData = useCallback(async (cityToFetch: string) => {
    setLoading(true)
    setError(null)

    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY
    if (!apiKey) {
      setError("Chave de API não configurada. Adicione NEXT_PUBLIC_WEATHER_API_KEY ao seu ambiente.")
      setLoading(false)
      return
    }

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityToFetch}&days=7&aqi=no&alerts=no`,
      )
      if (!response.ok) {
        throw new Error("Cidade não encontrada ou erro na API.")
      }
      const data: WeatherApiResponse = await response.json()
      setWeatherData(transformWeatherData(data))
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocorreu um erro desconhecido.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (city) {
      fetchWeatherData(city)
    }
  }, [city, fetchWeatherData])

  return { weatherData, loading, error, refetch: () => fetchWeatherData(city) }
}
