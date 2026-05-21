import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { recentTransactions } from "@/lib/mockData"
import { cn } from "@/lib/utils"

export function RecentTransactions() {
  return (
    <Card className="col-span-4 md:col-span-3 rounded-xl border-none shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-muted/50">
              <TableHead className="w-[200px]">Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentTransactions.map((transaction) => (
              <TableRow key={transaction.id} className="hover:bg-muted/50 border-muted/50 transition-colors">
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span>{transaction.customer}</span>
                    <span className="text-xs text-muted-foreground font-normal">{transaction.email}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={cn(
                    "px-2.5 py-0.5 rounded-full text-xs font-medium",
                    transaction.status === "Completed" && "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
                    transaction.status === "Pending" && "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
                    transaction.status === "Failed" && "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400",
                  )}>
                    {transaction.status}
                  </span>
                </TableCell>
                <TableCell className="text-muted-foreground">{transaction.date}</TableCell>
                <TableCell className="text-right font-semibold">
                  ${transaction.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
