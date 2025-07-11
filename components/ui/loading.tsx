import { Spin } from "antd"

export function Loading() {
  return (
    <div className="flex justify-center items-center h-64">
      <Spin size="large" />
    </div>
  )
}
