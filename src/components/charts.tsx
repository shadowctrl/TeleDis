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

const Charts = ({ chartData }: any) => {
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
