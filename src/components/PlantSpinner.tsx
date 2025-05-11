"use client"

export default function PlantSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      {/* Re-use your tulip icon, or swap in any small plant SVG under /public */}
      <img
        src="/pistachionut.svg"
        alt="Loading…"
        className="w-12 h-12 animate-grow-plant"
      />
    </div>
  )
}
