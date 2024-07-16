// src/components/Dashboard.js
import React from "react";
import ConnectedSCDB from "../ConnectedDB/ConnectedSCDB";

import TabComponent from "../TabComponent/TabComponent";

const Dashboard = () => {
  return (
   
      <div className="min-h-screen bg-white p-4 rounded shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Sunrise DF Dashboard</h1>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              DF Search UI
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Upload Scenario
            </button>
          </div>
        </div>

        <div class="grid grid-cols-4 gap-1">
          <div className="col-span-1">
            {" "}
            <ConnectedSCDB />
          </div>
          <div className="col-span-3">
            <TabComponent />
          </div>
        </div>
      </div>
  
  );
};

export default Dashboard;
