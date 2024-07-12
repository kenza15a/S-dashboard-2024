// src/components/GeneralInfo.js
import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Functional Scenario', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Logical Scenario 1', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Logical Scenario 2', uv: 2000, pv: 9800, amt: 2290 },
];

const GeneralInfo = () => (
  <div className="grid grid-cols-2 gap-4">
    <div className="bg-white border rounded-lg shadow-sm p-4">
      <h2 className="text-xl font-semibold">General Information</h2>
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>ODD</li>
        <li>Cost</li>
        <li>Version</li>
        <li>Data Quantity</li>
        <li>Owner</li>
      </ul>
    </div>
    <div className="bg-white border rounded-lg shadow-sm p-4 flex items-center justify-center">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default GeneralInfo;
