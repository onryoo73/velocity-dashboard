import { Transaction, Product, Activity, KpiData, RevenueData } from "@/types";

export const kpiData: KpiData[] = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    trend: "up",
    description: "from last month",
  },
  {
    title: "Subscriptions",
    value: "2,345",
    change: "+180",
    trend: "up",
    description: "new this month",
  },
  {
    title: "Active Users",
    value: "1,234",
    change: "+12%",
    trend: "up",
    description: "increase",
  },
  {
    title: "Churn Rate",
    value: "2.3%",
    change: "-0.5%",
    trend: "down",
    description: "improvement",
  },
];

export const revenueData: RevenueData[] = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 5500 },
];

export const recentTransactions: Transaction[] = [
  {
    id: "1",
    customer: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: 1999.00,
    status: "Completed",
    date: "2024-05-20",
  },
  {
    id: "2",
    customer: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: 39.00,
    status: "Completed",
    date: "2024-05-19",
  },
  {
    id: "3",
    customer: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: 299.00,
    status: "Pending",
    date: "2024-05-19",
  },
  {
    id: "4",
    customer: "William Kim",
    email: "will@email.com",
    amount: 99.00,
    status: "Completed",
    date: "2024-05-18",
  },
  {
    id: "5",
    customer: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: 39.00,
    status: "Failed",
    date: "2024-05-18",
  },
];

export const topProducts: Product[] = [
  { id: "1", name: "Pro Plan", unitsSold: 120, revenue: 12000 },
  { id: "2", name: "Basic Plan", unitsSold: 450, revenue: 4500 },
  { id: "3", name: "Enterprise", unitsSold: 12, revenue: 24000 },
  { id: "4", name: "Add-on: Storage", unitsSold: 300, revenue: 3000 },
];

export const activityTimeline: Activity[] = [
  {
    id: "1",
    user: "Olivia Martin",
    action: "Purchased Pro Plan",
    timestamp: "2 hours ago",
    type: "purchase",
  },
  {
    id: "2",
    user: "Jackson Lee",
    action: "Logged in",
    timestamp: "5 hours ago",
    type: "login",
  },
  {
    id: "3",
    user: "Isabella Nguyen",
    action: "Subscription changed to Basic",
    timestamp: "Yesterday",
    type: "subscription_change",
  },
  {
    id: "4",
    user: "William Kim",
    action: "Logged in",
    timestamp: "2 days ago",
    type: "login",
  },
];
