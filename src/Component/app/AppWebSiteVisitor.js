import ReactApexChart from "react-apexcharts";
// @mui
import { Card, CardHeader, Box } from "@mui/material";
// components
import { useChart } from "../Chart/index";

// ----------------------------------------------------------------------

export default function AppWebsiteVisits({
  title,
  type,
  subheader,
  chartLabels,
  chartData,
  Colors,
  widthlarge,
  ...other
}) {
  console.log(chartData, "chartData");

  const chartOptions = useChart({
    plotOptions: { bar: { columnWidth: "16%" } },
    // fill: { type: chartData.map((i) => i?.fill) },
    chart: { stacked: true },
    labels: chartLabels,
    xaxis: { type: type !== "pie" ? "datetime" : "" },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)} `;
          }
          return y;
        },
      },
    },
    colors: Colors,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 2, pb: 1 }} dir="ltr">
        <ReactApexChart
          type={type}
          series={chartData}
          options={chartOptions}
          height={280}
        />
      </Box>
    </Card>
  );
}
