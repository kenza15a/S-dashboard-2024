// src/components/Parameters.js
import React from "react";
import ParametterList from "../ParamettersList/ParametterList";
import ParametersDistributionChart from "../ParametersDistributionChart/ParametersDistributionChart";
const Parameters = () => (
  <div className="grid grid-cols-2 gap-4">
    <ParametterList />
    <ParametersDistributionChart />
  </div>
);

export default Parameters;
