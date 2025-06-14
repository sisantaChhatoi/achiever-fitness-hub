
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as ChartTooltip,
  BarChart,
  Bar,
} from "recharts";
import { getAnalytics } from "@/utils/demo-data";

export default function ProgressAnalytics() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setData(getAnalytics());
  }, []);

  if (!data) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-card rounded-xl shadow-lg p-6">
        <h3 className="font-semibold text-lg mb-4">Weight Trend (kg)</h3>
        <ResponsiveContainer width="100%" height={230}>
          <LineChart data={data.weight}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <ChartTooltip />
            <Line type="monotone" dataKey="kg" stroke="#2563eb" strokeWidth={2} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-card rounded-xl shadow-lg p-6">
        <h3 className="font-semibold text-lg mb-4">Workouts & Points</h3>
        <ResponsiveContainer width="100%" height={230}>
          <BarChart data={data.workouts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <ChartTooltip />
            <Bar dataKey="workouts" fill="#22c55e" name="Workouts" />
            <Bar dataKey="points" fill="#fdba08" name="Points" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
