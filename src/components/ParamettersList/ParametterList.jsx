import React, { useState } from "react";
import { Link } from "react-router-dom";

const ParametterList = () => {
  const [showEgo, setShowEgo] = useState(false);
  const [showDynamicObject, setShowDynamicObject] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [showRoad, setShowRoad] = useState(false);

  const handleEgoToggle = () => {
    setShowEgo(!showEgo);
  };

  const handleDynamicObjectToggle = () => {
    setShowDynamicObject(!showDynamicObject);
  };

  const handleWeatherToggle = () => {
    setShowWeather(!showWeather);
  };

  const handleRoadToggle = () => {
    setShowRoad(!showRoad);
  };

  const handleLinkClick = (action) => {
    console.log(`Action: ${action}`);
    // Implement your action function here
  };

  return (
    <div className="bg-white border rounded-lg shadow-sm p-4">
      <h2 className="text-xl font-semibold">Parameters</h2>
      <ul className="list-none space-y-2 mt-2">
        <li>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={showEgo}
              onChange={handleEgoToggle}
              className="mr-2"
            />
            Ego
          </label>
          {showEgo && (
            <ul className="pl-6 list-disc">
              <li>
                <Link to="#" onClick={() => handleLinkClick("speed")} className="text-blue-500 hover:underline">
                  Speed
                </Link>
              </li>
              <li>
                <Link to="#" onClick={() => handleLinkClick("steeringAngle")} className="text-blue-500 hover:underline">
                  Steering Angle
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={showDynamicObject}
              onChange={handleDynamicObjectToggle}
              className="mr-2"
            />
            Dynamic Object
          </label>
          {showDynamicObject && (
            <ul className="pl-6 list-disc">
              <li>
                <Link to="#" onClick={() => handleLinkClick("classification")} className="text-blue-500 hover:underline">
                  Classification
                </Link>
              </li>
              <li>
                <Link to="#" onClick={() => handleLinkClick("position")} className="text-blue-500 hover:underline">
                  Position
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={showWeather}
              onChange={handleWeatherToggle}
              className="mr-2"
            />
            Weather
          </label>
          {showWeather && (
            <ul className="pl-6 list-disc">
              <li>
                <Link to="#" onClick={() => handleLinkClick("temperatureDegree")} className="text-blue-500 hover:underline">
                  Temperature Degree
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={showRoad}
              onChange={handleRoadToggle}
              className="mr-2"
            />
            Road
          </label>
          {showRoad && (
            <ul className="pl-6 list-disc">
              <li>
                <Link to="#" onClick={() => handleLinkClick("markingType")} className="text-blue-500 hover:underline">
                  Marking Type
                </Link>
              </li>
              <li>
                <Link to="#" onClick={() => handleLinkClick("curvature")} className="text-blue-500 hover:underline">
                  Curvature
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ParametterList;

