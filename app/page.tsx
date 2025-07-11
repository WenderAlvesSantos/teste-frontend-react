"use client"

import { WeatherWidget } from "@/components/weather-widget"
import { ClientOnly } from "@/components/client-only"
import { CustomSpinner } from "@/components/custom-spinner"

export default function Home() {
  return (
    <ClientOnly
      fallback={
        <div
          style={{
            width: "100%",
            maxWidth: "700px",
            aspectRatio: "16 / 9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1e40af",
            borderRadius: "24px",
          }}
        >
          <CustomSpinner />
        </div>
      }
    >
      <WeatherWidget />
    </ClientOnly>
  )
}
