// Estrutura simplificada que nossos componentes usarão
export interface SimplifiedWeatherData {
  city: string
  country: string
  time: string
  localtime: string // Adicionado para corrigir a data
  isDay: boolean
  current: {
    tempC: number
    condition: string
    pressure: number
  }
  forecast: {
    date: string
    dayName: string
    maxTempC: number
    minTempC: number
    condition: string
  }[]
  astro: {
    sunrise: string
    sunset: string
  }
}

// Tipagem parcial para a resposta da WeatherAPI.com
export interface WeatherApiResponse {
  location: {
    name: string
    country: string
    localtime: string
  }
  current: {
    temp_c: number
    is_day: 1 | 0
    condition: {
      text: string
    }
    pressure_mb: number
  }
  forecast: {
    forecastday: {
      date: string
      day: {
        maxtemp_c: number
        mintemp_c: number
        condition: {
          text: string
        }
      }
      astro: {
        sunrise: string
        sunset: string
      }
    }[]
  }
}
