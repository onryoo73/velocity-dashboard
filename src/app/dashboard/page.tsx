import { KpiGrid } from "@/components/dashboard/KpiGrid"
import { RevenueChart } from "@/components/dashboard/RevenueChart"
import { RecentTransactions } from "@/components/dashboard/RecentTransactions"
import { TopProducts } from "@/components/dashboard/TopProducts"
import { ActivityTable } from "@/components/dashboard/ActivityTable"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      <KpiGrid />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <RevenueChart />
        </div>
        <div className="col-span-4 lg:col-span-3">
          <TopProducts />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <RecentTransactions />
        </div>
        <div className="col-span-4 lg:col-span-3">
          <ActivityTable />
        </div>
      </div>
    </div>
  )
}
