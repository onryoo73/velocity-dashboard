import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown } from "lucide-react"

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  description: string;
  gradient: string;
}

export function StatsCard({ title, value, change, trend, description, gradient }: StatsCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden border-none transition-all hover:scale-[1.02] duration-300",
      gradient
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-white/80">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="flex items-center pt-1">
          {trend === 'up' ? (
            <TrendingUp className="h-4 w-4 text-emerald-300 mr-1" />
          ) : (
            <TrendingDown className="h-4 w-4 text-rose-300 mr-1" />
          )}
          <span className={cn(
            "text-xs font-medium mr-1",
            trend === 'up' ? "text-emerald-300" : "text-rose-300"
          )}>
            {change}
          </span>
          <span className="text-xs text-white/60">{description}</span>
        </div>
      </CardContent>
    </Card>
  )
}
