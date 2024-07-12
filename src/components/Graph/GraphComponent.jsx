// src/components/GraphComponent.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const GraphComponent = () => {
  const data = [
    { name: "Scenario 1", value: 400 },
    { name: "Scenario 2", value: 300 },
    { name: "Scenario 3", value: 300 },
    { name: "Scenario 4", value: 200 },
  ];

  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default GraphComponent;
