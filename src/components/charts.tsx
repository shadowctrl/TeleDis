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
    { month: "January", messages: 1186 },
    { month: "February", messages: 1305 },
    { month: "March", messages: 2137 },
    { month: "April", messages: 173 },
    { month: "May", messages: 2109 },
    { month: "June", messages: 1214 },
    { month: "July", messages: 2114 },
    { month: "August", messages: 5100 },
    { month: "September", messages: 1800 },
    { month: "October", messages: 4130 },
    { month: "November", messages: 1700 },
    { month: "December", messages: 2145 },
  ];

  const chartConfig = {
    messages: {
      label: "Total Messages",
      color: "#ffffff",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="w-[60vw] h-[50vh]">
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
