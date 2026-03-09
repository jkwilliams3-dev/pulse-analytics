import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { trafficSources } from '../../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; payload: { name: string; color: string } }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;
  const item = payload[0];
  return (
    <div
      className="rounded-lg p-3 text-sm"
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #334155',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
      }}
    >
      <p className="text-gray-500 mb-1.5 font-medium">{label}</p>
      <div className="flex items-center gap-2">
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: item.payload.color }}
        />
        <span className="text-gray-900 font-semibold">
          {new Intl.NumberFormat('en-US').format(item.value)} visitors
        </span>
      </div>
    </div>
  );
}

export default function TrafficChart() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Traffic Sources</CardTitle>
        <p className="text-sm text-muted-foreground">Visitor breakdown by acquisition channel</p>
      </CardHeader>
      <CardContent>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={trafficSources}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          barCategoryGap="35%"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={true} vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fill: '#64748b', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#64748b', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`}
            width={40}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(47,129,247,0.05)' }} />
          <Bar dataKey="visitors" radius={[4, 4, 0, 0]}>
            {trafficSources.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
