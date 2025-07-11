"use client"

interface CustomSwitchProps {
  isChecked: boolean
  onChange: (checked: boolean) => void
}

export function CustomSwitch({ isChecked, onChange }: CustomSwitchProps) {
  return (
    <>
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={(e) => onChange(e.target.checked)} />
        <span className="slider"></span>
      </label>
      <style jsx>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(255, 255, 255, 0.3);
          transition: 0.4s;
          border-radius: 24px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 20px;
          width: 20px;
          left: 2px;
          bottom: 2px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: #3b82f6;
        }
        input:checked + .slider:before {
          transform: translateX(20px);
        }
      `}</style>
    </>
  )
}
