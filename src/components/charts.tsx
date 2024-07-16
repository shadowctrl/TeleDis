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
    { month: "January", messages: 186 },
    { month: "February", messages: 305 },
    { month: "March", messages: 237 },
    { month: "April", messages: 73 },
    { month: "May", messages: 209 },
    { month: "June", messages: 214 },
    { month: "July", messages: 214 },
    { month: "August", messages: 500 },
    { month: "September", messages: 800 },
    { month: "October", messages: 430 },
    { month: "November", messages: 700 },
    { month: "December", messages: 245 },
  ];

  const chartConfig = {
    messages: {
      label: "Total Messages",
      color: "#ffffff",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="w-[45vw] h-[50vh]">
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
