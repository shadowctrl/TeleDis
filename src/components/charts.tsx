"use client";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const Charts = () => {
  const chartData = [
    { month: "January", messages: 4000 },
    { month: "February", messages: 3000 },
    { month: "March", messages: 13000 },
    { month: "April", messages: 3500 },
    { month: "May", messages: 5500 },
    { month: "June", messages: 2500 },
    { month: "July", messages: 7500 },
    { month: "August", messages: 12000 },
    { month: "September", messages: 1500 },
    { month: "October", messages: 4500 },
    { month: "November", messages: 4000 },
    { month: "December", messages: 500 },
  ];

  const chartConfig = {
    messages: {
      label: "Total Messages",
      color: "#ffffff",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="w-[50vw] h-[45vh]">
      <BarChart accessibilityLayer data={chartData}>
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          dataKey="messages"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              nameKey="Messages"
              className="chart-tooltip"
              indicator="line"
              color="green"
            />
          }
        />
        <ChartLegend content={<ChartLegendContent className="text-white" />} />
        <Bar dataKey={"messages"} radius={4} fill="white" />
      </BarChart>
    </ChartContainer>
  );
};

export default Charts;
