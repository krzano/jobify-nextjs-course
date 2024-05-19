"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useQuery } from "@tanstack/react-query";
import { getChartsDataAction } from "@/utils/actions";
function ChartsContainer() {
  const { data } = useQuery({
    queryKey: ["charts"],
    queryFn: () => getChartsDataAction(),
  });

  if (!data || data.length < 1) return null;
  return (
    <section className="mt-16">
      <h1 className="text-center text-4xl">Monthly Applications</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 50 }}>
          <CartesianGrid strokeOpacity={0.3} />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" barSize={60} fill="#f9731673" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
export default ChartsContainer;
