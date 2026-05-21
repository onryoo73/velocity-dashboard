"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  BarChart3, 
  ArrowLeftRight, 
  Settings, 
  Zap,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/analytics",
    color: "text-violet-500",
  },
  {
    label: "Transactions",
    icon: ArrowLeftRight,
    href: "/transactions",
    color: "text-pink-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

interface SidebarProps {
  onClose?: () => void;
  className?: string;
}

export function Sidebar({ onClose, className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn(
      "space-y-4 py-4 flex flex-col h-full glassmorphism text-foreground border-r",
      className
    )}>
      <div className="px-6 py-2 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center">
          <div className="relative w-8 h-8 mr-4">
            <Zap className="w-8 h-8 text-primary fill-primary/20" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Velocity</h1>
        </Link>
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose} className="md:hidden">
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>
      <div className="px-3 py-2 flex-1">
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-primary/10 rounded-xl transition-all",
                pathname === route.href ? "bg-primary/10 text-primary" : "text-muted-foreground"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
