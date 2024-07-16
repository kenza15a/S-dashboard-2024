// src/components/ParametersDistributionChart.js
import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { name: 'A', value: 0 },
  { name: 'B', value: 30 },
  { name: 'C', value: 50 },
  { name: 'D', value: 80 },
  { name: 'E', value: 100 },
  { name: 'F', value: 80 },
  { name: 'G', value: 50 },
  { name: 'H', value: 30 },
  { name: 'I', value: 0 },
];

const ParametersDistributionChart = () => (
  <div className="bg-white border rounded-lg shadow-sm p-4">
    <h2 className="text-xl font-semibold mb-4">Parameters Distribution</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default ParametersDistributionChart;
