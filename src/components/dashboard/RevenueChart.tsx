import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { revenueData } from '../../data/mockData';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;
  return (
    <div
      className="rounded-lg p-3 text-sm"
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #334155',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
      }}
    >
      <p className="text-gray-500 mb-2 font-medium">{label}</p>
      {payload.map((entry) => (
        <div key={entry.name} className="flex items-center gap-2 mb-1">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-gray-500">{entry.name}:</span>
          <span className="text-gray-900 font-semibold">{formatCurrency(entry.value)}</span>
        </div>
      ))}
    </div>
  );
}

export default function RevenueChart() {
  return (
    <div
      className="rounded-xl p-6 border"
      style={{
        backgroundColor: '#ffffff',
        borderColor: '#e2e8f0',
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-semibold text-gray-900">Revenue Overview</h3>
          <p className="text-sm text-gray-500 mt-0.5">Monthly revenue vs previous year</p>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 rounded-full block" style={{ backgroundColor: '#2f81f7' }} />
            <span>2025</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 rounded-full bg-slate-300 block" />
            <span>2024</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={revenueData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="month"
            tick={{ fill: '#64748b', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#64748b', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`}
            width={55}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ display: 'none' }} />
          <Line
            type="monotone"
            dataKey="revenue"
            name="2025"
            stroke="#2f81f7"
            strokeWidth={2.5}
            dot={{ fill: '#2f81f7', r: 3, strokeWidth: 0 }}
            activeDot={{ r: 5, fill: '#60a5fa' }}
          />
          <Line
            type="monotone"
            dataKey="previousYear"
            name="2024"
            stroke="#475569"
            strokeWidth={2}
            strokeDasharray="4 4"
            dot={false}
            activeDot={{ r: 4, fill: '#64748b' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
