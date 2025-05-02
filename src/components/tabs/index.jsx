import React from "react";
import TabsItems from "./Tabs";

function RandomComponent() {
  return <div>Content of tab 4</div>;
}

const tabs = [
  {
    label: "Tab 1",
    content: "content of tab 1",
  },
  {
    label: "Tab 2",
    content: "content of tab 2",
  },
  {
    label: "Tab 3",
    content: "content of tab 3",
  },
  {
    label: "Tab 4",
    content: <RandomComponent />,
  },
];

const handleChange = (currentTabIndex) => {
  console.log(currentTabIndex);
};

export default function Tabs() {
  return (
    <div>
      <TabsItems
        tabsContent={tabs}
        onChange={handleChange}
      />
    </div>
  );
}
