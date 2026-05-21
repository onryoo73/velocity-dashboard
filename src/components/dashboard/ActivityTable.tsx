import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { activityTimeline } from "@/lib/mockData"
import { User, ShoppingCart, RefreshCcw, LogIn } from "lucide-react"
import { cn } from "@/lib/utils"

const icons = {
  purchase: ShoppingCart,
  login: LogIn,
  subscription_change: RefreshCcw,
}

const colors = {
  purchase: "bg-blue-500/10 text-blue-500",
  login: "bg-emerald-500/10 text-emerald-500",
  subscription_change: "bg-amber-500/10 text-amber-500",
}

export function ActivityTable() {
  return (
    <Card className="col-span-4 lg:col-span-2 rounded-xl border-none shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Activity Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
          {activityTimeline.map((activity) => {
            const Icon = icons[activity.type]
            return (
              <div key={activity.id} className="relative flex items-center group">
                <div className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full z-10 transition-transform group-hover:scale-110 duration-300",
                  colors[activity.type]
                )}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    <span className="font-bold">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
