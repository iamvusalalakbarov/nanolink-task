import { useState } from "react";
import { tabs } from "./lib/mockData.ts";

const App = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const TabComponent = tabs[activeTabIndex].component;

  return (
    <>
      {/* Burger */}
      <div className="lg:hidden py-6 px-[46.5px] absolute top-0 right-0">
        <img src="/svg-icons/burger.svg" alt="burger" />
      </div>

      {/* Header */}
      <header className="wrapper mt-[124px] mb-[52px] lg:mt-[180px] lg:mb-12 flex items-start gap-x-5 lg:gap-x-8">
        <a href="#" className="inline-block py-[7px] lg:py-0">
          <img
            src="/svg-icons/arrow-narrow-left.svg"
            alt="arrow-narrow-left"
            className="lg:size-7"
          />
        </a>

        <div className="space-y-2 lg:space-y-4 flex-1">
          <h1 className="text-white text-2xl lg:text-4xl">
            FIG ARTISTIC GYMNASTICS WORLD CUP
          </h1>

          <div className="flex items-center gap-x-3 text-[#9598B1] lg:text-xl lg:text-grey-50">
            <span>Doha, Qatar</span>
            <span>|</span>
            <span>12/03/2023 - 13/02/2023</span>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="wrapper overflow-x-auto whitespace-nowrap">
        <div className="flex items-center w-max lg:w-full">
          {tabs.map((tab, index) => (
            <label
              key={index}
              onClick={() => setActiveTabIndex(index)}
              className="w-[148px] lg:w-1/5 flex items-center justify-center shrink-0 gap-x-1.5 pb-6 cursor-pointer relative group"
            >
              <span
                className={`absolute bottom-0 left-0 right-0 block transition-colors duration-500 ease-in-out ${activeTabIndex === index ? "h-0.5 bg-blue-main" : "h-px bg-purple-main group-hover:bg-blue-main"}`}
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

      {/* Dynamic rendering tab if exists */}
      <div className="pb-20">
        {TabComponent && <TabComponent />}
      </div>
    </>
  );
};

export default App;
