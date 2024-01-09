import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function Chart() {
    const [state, setState] = useState({
        series: [60, 30, 10],
        options: {
            chart: {
                type: "donut",
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 300,
                        },
                        legend: {
                            show: true,
                            position: 'bottom'
                        },
                    },
                },
            ],
            labels: ["Male", "Female", "unknown"],
            colors: ["#EE5421", "#0012D7", "#202124"],
            plotOptions: {
                pie: {
                    donut: {
                        size: "70%", // Adjust the size to increase or decrease the track width
                    },
                },
            },
            dataLabels: {
                enabled: true,
                position: "bottom", // Set the label position to "bottom"
                formatter: function (val) {
                    return `${Math.round(val)}%`; // Format the label to display rounded percentage values
                },
            },
        },
    });



    return (
        <div className="chart">
            <ReactApexChart
                options={state?.options}
                series={state?.series}
                type="donut"
                width={"100%"}
                height={350}
            />

        </div>
    );
}

export default Chart;
