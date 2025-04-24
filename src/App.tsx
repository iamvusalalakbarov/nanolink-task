import { useState } from "react";
import { tabs } from "./lib/mockData.ts";
import Burger from "@/components/Burger.tsx";
import Header from "@/components/Header.tsx";
import Tabs from "@/components/Tabs.tsx";

const App = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const TabComponent = tabs[activeTabIndex].component;

  return (
    <>
      <Burger />

      <Header />

      <Tabs
        onTabChange={(index) => setActiveTabIndex(index)}
        activeTabIndex={activeTabIndex}
      />

      {/* Dynamic rendering tab if exists */}
      <div className="pb-20">{TabComponent && <TabComponent />}</div>
    </>
  );
};

export default App;
