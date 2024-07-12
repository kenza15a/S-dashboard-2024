// src/components/ConnectedSCDB.js
import React, { useState } from "react";

const ConnectedSCDB = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectChange = (event) => {
    const { value, checked } = event.target;
    setSelectedItems((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className="bg-white border rounded-lg shadow-sm">
      <h2 className="font-bold text-white bg-blue-500 rounded-t-lg p-2">
        Connected SCDB
      </h2>
      <div className="p-2">
        <label className="block mb-2">
          <input
            type="checkbox"
            value="Adscene"
            checked={selectedItems.includes("Adscene")}
            onChange={handleSelectChange}
            className="mr-2"
          />
          Adscene
        </label>
        <label className="block mb-2">
          <input
            type="checkbox"
            value="StreetWise"
            checked={selectedItems.includes("StreetWise")}
            onChange={handleSelectChange}
            className="mr-2"
          />
          StreetWise
        </label>
        <label className="block mb-2">
          <input
            type="checkbox"
            value="Scenius"
            checked={selectedItems.includes("Scenius")}
            onChange={handleSelectChange}
            className="mr-2"
          />
          Scenius
        </label>
        <label className="block mb-2">
          <input
            type="checkbox"
            value="VMMethods"
            checked={selectedItems.includes("VMMethods")}
            onChange={handleSelectChange}
            className="mr-2"
          />
          VMMethods
        </label>
        <label className="block mb-2">
          <input
            type="checkbox"
            value="SafetyPool"
            checked={selectedItems.includes("SafetyPool")}
            onChange={handleSelectChange}
            className="mr-2"
          />
          SafetyPool
        </label>
      </div>
    </div>
  );
};

export default ConnectedSCDB;
