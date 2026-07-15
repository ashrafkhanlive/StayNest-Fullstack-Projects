"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { DashboardData } from "@/services/dashboard-service";

export function DashboardShell({
  title,
  data,
}: {
  title: string;
  data: DashboardData;
}) {
  return (
    <section className="container-page">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold text-primary">Operations</p>
          <h1 className="mt-2 text-3xl font-black md:text-5xl">{title}</h1>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.metrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black">{metric.value}</div>
              <p className="mt-2 text-sm font-semibold text-primary">{metric.delta}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Card>
          <CardHeader>
            <h2 className="font-bold">Revenue</h2>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.revenue}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#FF385C" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="font-bold">Inventory</h2>
          </CardHeader>
          <CardContent className="grid gap-4">
            {data.inventory.map((item) => (
              <div key={item.name}>
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-muted-foreground">
                    {item.available} open
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{
                      width: `${Math.min(100, item.booked * 18)}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
