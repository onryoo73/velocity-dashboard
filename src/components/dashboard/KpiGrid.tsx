import { StatsCard } from "../layout/StatsCard"
import { kpiData } from "@/lib/mockData"

const gradients = [
  "bg-gradient-to-br from-blue-600 to-indigo-700",
  "bg-gradient-to-br from-purple-600 to-violet-700",
  "bg-gradient-to-br from-emerald-500 to-teal-700",
  "bg-gradient-to-br from-orange-500 to-rose-600",
]

export function KpiGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpiData.map((kpi, index) => (
        <StatsCard
          key={kpi.title}
          {...kpi}
          gradient={gradients[index % gradients.length]}
        />
      ))}
    </div>
  )
}
