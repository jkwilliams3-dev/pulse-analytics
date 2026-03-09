import React from 'react';
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
    <div
      className="animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`${metric.label}: ${metric.value}, ${metric.changeLabel} vs last month`}
    >
      <div
        className="rounded-xl p-6 border transition-all duration-200 cursor-default"
        style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(37,99,235,0.08)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#bfdbfe'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; (e.currentTarget as HTMLDivElement).style.borderColor = '#e2e8f0'; }}
      >
        <div className="flex items-center justify-between mb-4">
          <span style={{ fontSize: '13px', fontWeight: 500, color: '#64748b' }}>{metric.label}</span>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: iconStyle.bg, color: iconStyle.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {iconMap[metric.icon]}
          </div>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a' }}>{metric.value}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '3px',
              padding: '2px 8px', borderRadius: '6px', fontSize: '12px', fontWeight: 600,
              backgroundColor: isPositive ? '#dcfce7' : '#fee2e2',
              color: isPositive ? '#15803d' : '#b91c1c',
            }}
          >
            {isPositive ? (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="18 15 12 9 6 15" /></svg>
            ) : (
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6 9 12 15 18 9" /></svg>
            )}
            {metric.changeLabel}
          </span>
          <span style={{ fontSize: '12px', color: '#94a3b8' }}>vs last month</span>
        </div>
      </div>
    </div>
  );
}
