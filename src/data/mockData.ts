export interface KPIMetric {
  id: string;
  label: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: string;
}

export interface RevenueDataPoint {
  month: string;
  revenue: number;
  previousYear: number;
}

export interface TrafficSource {
  name: string;
  visitors: number;
  color: string;
}

export interface DeviceBreakdown {
  name: string;
  value: number;
  color: string;
}

export interface Transaction {
  id: string;
  date: string;
  customer: string;
  company: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed' | 'refunded';
  category: string;
}

export const kpiMetrics: KPIMetric[] = [
  {
    id: 'revenue',
    label: 'Revenue',
    value: '$142.8K',
    change: 12.4,
    changeLabel: '+12.4%',
    icon: 'dollar',
  },
  {
    id: 'users',
    label: 'Active Users',
    value: '8,294',
    change: 5.2,
    changeLabel: '+5.2%',
    icon: 'users',
  },
  {
    id: 'conversion',
    label: 'Conversion Rate',
    value: '3.8%',
    change: -0.3,
    changeLabel: '-0.3%',
    icon: 'chart',
  },
  {
    id: 'aov',
    label: 'Avg Order Value',
    value: '$67.50',
    change: 8.1,
    changeLabel: '+8.1%',
    icon: 'bag',
  },
];

export const revenueData: RevenueDataPoint[] = [
  { month: 'Jan', revenue: 95200, previousYear: 88100 },
  { month: 'Feb', revenue: 98400, previousYear: 91300 },
  { month: 'Mar', revenue: 105600, previousYear: 97800 },
  { month: 'Apr', revenue: 112300, previousYear: 103200 },
  { month: 'May', revenue: 118900, previousYear: 108700 },
  { month: 'Jun', revenue: 124500, previousYear: 115300 },
  { month: 'Jul', revenue: 119800, previousYear: 112100 },
  { month: 'Aug', revenue: 121300, previousYear: 113400 },
  { month: 'Sep', revenue: 128700, previousYear: 118900 },
  { month: 'Oct', revenue: 134200, previousYear: 122100 },
  { month: 'Nov', revenue: 138900, previousYear: 126800 },
  { month: 'Dec', revenue: 142800, previousYear: 131200 },
];

export const trafficSources: TrafficSource[] = [
  { name: 'Direct', visitors: 42300, color: '#6366f1' },
  { name: 'Organic Search', visitors: 38700, color: '#8b5cf6' },
  { name: 'Social Media', visitors: 24100, color: '#a78bfa' },
  { name: 'Referral', visitors: 18900, color: '#c4b5fd' },
  { name: 'Email', visitors: 12600, color: '#ddd6fe' },
];

export const deviceBreakdown: DeviceBreakdown[] = [
  { name: 'Desktop', value: 58, color: '#6366f1' },
  { name: 'Mobile', value: 32, color: '#8b5cf6' },
  { name: 'Tablet', value: 10, color: '#a78bfa' },
];

export const transactions: Transaction[] = [
  {
    id: 'TXN-001',
    date: '2025-12-31',
    customer: 'James Hartwell',
    company: 'Acme Corp',
    amount: 349.00,
    status: 'completed',
    category: 'Enterprise',
  },
  {
    id: 'TXN-002',
    date: '2025-12-30',
    customer: 'Sophia Reyes',
    company: 'TechVentures Inc',
    amount: 89.50,
    status: 'completed',
    category: 'Starter',
  },
  {
    id: 'TXN-003',
    date: '2025-12-29',
    customer: 'Marcus Chen',
    company: 'GlobalScale Ltd',
    amount: 720.00,
    status: 'completed',
    category: 'Enterprise',
  },
  {
    id: 'TXN-004',
    date: '2025-12-28',
    customer: 'Olivia Bennett',
    company: 'Nexus Solutions',
    amount: 199.00,
    status: 'pending',
    category: 'Professional',
  },
  {
    id: 'TXN-005',
    date: '2025-12-27',
    customer: 'Daniel Walsh',
    company: 'Brightwave Media',
    amount: 54.99,
    status: 'completed',
    category: 'Starter',
  },
  {
    id: 'TXN-006',
    date: '2025-12-26',
    customer: 'Priya Sharma',
    company: 'CloudForge Systems',
    amount: 890.00,
    status: 'completed',
    category: 'Enterprise',
  },
  {
    id: 'TXN-007',
    date: '2025-12-24',
    customer: 'Ryan Fitzgerald',
    company: 'Pinnacle Analytics',
    amount: 149.00,
    status: 'failed',
    category: 'Professional',
  },
  {
    id: 'TXN-008',
    date: '2025-12-23',
    customer: 'Emma Lawson',
    company: 'Vertex Labs',
    amount: 67.00,
    status: 'completed',
    category: 'SaaS',
  },
  {
    id: 'TXN-009',
    date: '2025-12-22',
    customer: 'Nathan Brooks',
    company: 'Ironclad Digital',
    amount: 430.00,
    status: 'completed',
    category: 'Enterprise',
  },
  {
    id: 'TXN-010',
    date: '2025-12-20',
    customer: 'Isabella Torres',
    company: 'Luminary Tech',
    amount: 29.99,
    status: 'refunded',
    category: 'Starter',
  },
  {
    id: 'TXN-011',
    date: '2025-12-19',
    customer: 'Chris Aldridge',
    company: 'Momentum SaaS',
    amount: 249.00,
    status: 'completed',
    category: 'SaaS',
  },
  {
    id: 'TXN-012',
    date: '2025-12-18',
    customer: 'Vanessa Moon',
    company: 'Redwood Partners',
    amount: 512.00,
    status: 'pending',
    category: 'Enterprise',
  },
  {
    id: 'TXN-013',
    date: '2025-12-17',
    customer: 'Tyler Grant',
    company: 'Sparq Innovation',
    amount: 99.00,
    status: 'completed',
    category: 'Professional',
  },
  {
    id: 'TXN-014',
    date: '2025-12-15',
    customer: 'Aisha Patel',
    company: 'SkyBridge Corp',
    amount: 340.00,
    status: 'completed',
    category: 'SaaS',
  },
  {
    id: 'TXN-015',
    date: '2025-12-14',
    customer: 'Jordan Kim',
    company: 'Calibrate AI',
    amount: 12.00,
    status: 'completed',
    category: 'Starter',
  },
  {
    id: 'TXN-016',
    date: '2025-12-12',
    customer: 'Megan Foster',
    company: 'Helios Networks',
    amount: 675.00,
    status: 'completed',
    category: 'Enterprise',
  },
  {
    id: 'TXN-017',
    date: '2025-12-11',
    customer: 'Lucas Perry',
    company: 'Orion Platforms',
    amount: 189.00,
    status: 'failed',
    category: 'Professional',
  },
  {
    id: 'TXN-018',
    date: '2025-12-09',
    customer: 'Camille Dubois',
    company: 'Stratos Digital',
    amount: 445.00,
    status: 'completed',
    category: 'SaaS',
  },
  {
    id: 'TXN-019',
    date: '2025-12-07',
    customer: 'Derek Okonkwo',
    company: 'Trident Software',
    amount: 78.50,
    status: 'completed',
    category: 'Starter',
  },
  {
    id: 'TXN-020',
    date: '2025-12-05',
    customer: 'Natalie Cruz',
    company: 'Zenith Cloud',
    amount: 820.00,
    status: 'pending',
    category: 'Enterprise',
  },
];
