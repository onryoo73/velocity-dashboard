export interface Transaction {
  id: string;
  customer: string;
  email: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
  date: string;
}

export interface Product {
  id: string;
  name: string;
  unitsSold: number;
  revenue: number;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  type: 'login' | 'purchase' | 'subscription_change';
}

export interface KpiData {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  description: string;
}

export interface RevenueData {
  month: string;
  revenue: number;
}
