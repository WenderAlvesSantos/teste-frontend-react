"use client"

import type React from "react"
interface NotificationProps {
  message: string
  type: "success" | "error"
}

export function Notification({ message, type }: NotificationProps) {
  const style: React.CSSProperties = {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "10px 20px",
    borderRadius: "8px",
    color: "white",
    backgroundColor: type === "success" ? "#22c55e" : "#ef4444",
    zIndex: 1000,
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    animation: "fadeInOut 3s forwards",
  }

  return (
    <>
      <div style={style}>{message}</div>
      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          10% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          90% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
        }
      `}</style>
    </>
  )
}
