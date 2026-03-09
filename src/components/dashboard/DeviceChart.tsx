import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { deviceBreakdown } from '../../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; payload: { color: string } }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
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
      <div className="flex items-center gap-2">
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: item.payload.color }}
        />
        <span className="text-gray-500">{item.name}:</span>
        <span className="text-gray-900 font-semibold">{item.value}%</span>
      </div>
    </div>
  );
}

export default function DeviceChart() {
  const total = deviceBreakdown.reduce((sum, d) => sum + d.value, 0);

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Device Breakdown</CardTitle>
        <p className="text-sm text-muted-foreground">Sessions by device type</p>
      </CardHeader>
      <CardContent>

      <div className="flex items-center gap-6">
        {/* Donut chart */}
        <div className="relative flex-shrink-0" style={{ width: 180, height: 180 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={deviceBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                isAnimationActive={true}
                animationDuration={800}
              >
                {deviceBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          {/* Center text */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          >
            <span className="text-2xl font-bold text-gray-900">{total}%</span>
            <span className="text-xs text-gray-500">Total</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-3 flex-1">
          {deviceBreakdown.map((device) => (
            <div key={device.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: device.color }}
                />
                <span className="text-sm text-gray-600">{device.name}</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">{device.value}%</span>
            </div>
          ))}
        </div>
      </div>
      </CardContent>
    </Card>
  );
}
