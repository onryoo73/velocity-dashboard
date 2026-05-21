import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { topProducts } from "@/lib/mockData"

export function TopProducts() {
  return (
    <Card className="col-span-4 lg:col-span-2 rounded-xl border-none shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {topProducts.map((product) => (
            <div key={product.id} className="flex items-center">
              <div className="space-y-1 flex-1">
                <p className="text-sm font-medium leading-none">{product.name}</p>
                <p className="text-sm text-muted-foreground">
                  {product.unitsSold} units sold
                </p>
              </div>
              <div className="ml-auto font-semibold">
                +${product.revenue.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
