import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { KPIMetric } from '../../data/mockData';

interface Props {
  metric: KPIMetric;
  delay?: number;
}

const iconMap: Record<string, React.ReactElement> = {
  dollar: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  users: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  chart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  bag: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
};

const iconColors: Record<string, { bg: string; color: string }> = {
  dollar: { bg: '#eff6ff', color: '#2563eb' },
  users:  { bg: '#f0fdf4', color: '#16a34a' },
  chart:  { bg: '#fef2f2', color: '#dc2626' },
  bag:    { bg: '#faf5ff', color: '#7c3aed' },
};

export default function KPICard({ metric, delay = 0 }: Props) {
  const isPositive = metric.change >= 0;
  const iconStyle = iconColors[metric.icon] ?? { bg: '#eff6ff', color: '#2563eb' };

  return (
    <div className="animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <Card className="hover:shadow-md transition-shadow duration-200 hover:ring-blue-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: iconStyle.bg, color: iconStyle.color }}
            >
              {iconMap[metric.icon]}
            </div>
          </div>
          <div className="mb-2">
            <span className="text-3xl font-bold text-foreground">{metric.value}</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className={`text-xs font-semibold px-2 py-0.5 ${
                isPositive
                  ? 'bg-green-50 text-green-700 border-green-200'
                  : 'bg-red-50 text-red-700 border-red-200'
              }`}
            >
              {isPositive ? (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="mr-0.5"><polyline points="18 15 12 9 6 15" /></svg>
              ) : (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="mr-0.5"><polyline points="6 9 12 15 18 9" /></svg>
              )}
              {metric.changeLabel}
            </Badge>
            <span className="text-xs text-muted-foreground">vs last month</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
