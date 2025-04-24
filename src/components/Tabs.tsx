import { tabs } from "@/lib/mockData.ts";
import React from "react";

interface ITabsProps {
  onTabChange: (index: number) => void;
  activeTabIndex: number;
}

const Tabs: React.FC<ITabsProps> = (props) => {
  return (
    <div className="wrapper overflow-x-auto whitespace-nowrap">
      <div className="flex items-center w-max lg:w-full">
        {tabs.map((tab, i) => (
          <label
            key={i}
            onClick={() => props.onTabChange(i)}
            className="w-[148px] lg:w-1/5 flex items-center justify-center shrink-0 gap-x-1.5 pb-6 cursor-pointer relative group"
          >
            <span
              className={`absolute bottom-0 left-0 right-0 block transition-colors duration-500 ease-in-out ${props.activeTabIndex === i ? "h-0.5 bg-blue-main" : "h-px bg-purple-main group-hover:bg-blue-main"}`}
            ></span>
            {tab.isLive && (
              <span className="flex size-2 rounded-full bg-red-live"></span>
            )}
            <span className="text-violet-50 font-light lg:text-xl">
              {tab.name}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
