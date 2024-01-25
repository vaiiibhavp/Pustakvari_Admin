import ReactApexChart from "react-apexcharts";
// @mui
import { Card, CardHeader, Box, Typography, useTheme } from "@mui/material";
// components
import { useChart } from "../Chart/index";

// ----------------------------------------------------------------------

export default function AppWebsiteVisits({
  title,
  type,
  subheader,
  chartLabels,
  chartData,
  garphLable,
  subtext,
  Colors,
  widthlarge,
  legendPosition,
  ...other
}) {
  const theme = useTheme();

  const chartOptions = useChart({
    plotOptions: { bar: { columnWidth: title !== "Users" ? "10%" : "42%" } },
    // fill: { type: chartData.map((i) => i?.fill) },
    title: { title },
    chart: { stacked: true },
    labels: chartLabels,
    manualLable: garphLable,
    legend: {
      show: true,
      position: legendPosition ? "top" : "bottom",
      horizontalAlign: legendPosition ? "right" : "center",
      markers: {
        radius: 12,
      },
      fontWeight: 500,
      itemMargin: { horizontal: 12 },
      labels: {
        colors: theme.palette.text.primary,
      },
    },
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
      <Typography
        sx={{ margin: "0 0 0 26px", color: theme?.palette.grey[400] }}
      >
        {subtext}
      </Typography>

      <Box sx={{ p: 2, pb: 2 }} dir="ltr">
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
