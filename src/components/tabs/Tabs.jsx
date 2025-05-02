import React, { useState } from "react";
import "./tabs.css";
export default function TabsItems({ tabsContent, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleIndex = (currIndex) => {
    setCurrentTabIndex(currIndex);
    onChange(currIndex);
    console.log(currIndex);
  };
  return (
    <div className='wrapper'>
      <div className='heading'>
        {tabsContent?.map((tab, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            key={tab.label}
            onClick={() => handleIndex(index)}
          >
            <span className='label'>{tab.label}</span>
          </div>
        ))}
      </div>

      <div className='content'>{tabsContent[currentTabIndex]?.content}</div>
    </div>
  );
}
