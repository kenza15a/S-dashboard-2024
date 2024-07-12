// TabComponent.js
import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import Scenarios from "./Scenarios";
import Parameters from "./Parameters";
import MetaData from "./MetaData";
import QualityMetrics from "./QualityMetrics";

const tabs = [
  { name: "General information", content: <GeneralInfo /> },
  { name: "Scenarios", content: <Scenarios /> },
  { name: "Parameters", content: <Parameters /> },
  { name: "Meta-data", content: <MetaData /> },
  { name: "Quality Metrics", content: <QualityMetrics /> },
];

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.name
                  ? "border-indigo-500 text-indigo-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-4">
        {tabs.find((tab) => tab.name === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabComponent;
