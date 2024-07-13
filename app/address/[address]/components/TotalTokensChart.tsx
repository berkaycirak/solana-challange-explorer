import React from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Page A",
    "Non Fungible": 2,
    Fungible: 1,
  },
];
const TotalTokensChart = () => {
  return (
    <BarChart width={300} height={250} data={data} className="mt-4">
      <XAxis dataKey="Token Holdings" name="Token Holdings" />
      <YAxis allowDecimals={false} />

      <Legend />
      <Bar dataKey="Non Fungible" fill="#8884d8" />
      <Bar dataKey="Fungible" fill="#82ca9d" />
    </BarChart>
  );
};

export default TotalTokensChart;
