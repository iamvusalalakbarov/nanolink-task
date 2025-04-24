import React, { useState } from "react";
import {
  apparatus,
  liveTabTableData,
  resultsTabTableData,
} from "@/lib/mockData.ts";
import { Apparatus } from "@/lib/types.ts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import { formatName } from "@/lib/utils.ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const filterCategories = {
  gender: ["MAG", "WAG"],
  round: ["Qualification", "Final"],
  type: ["Apparatus", "Team", "All-around"],
  ageGroup: ["Seniors", "Juniors"],
};

const ResultsTab = () => {
  const [activeFilters, setActiveFilters] = useState({
    gender: "MAG",
    round: "Final",
    type: "Apparatus",
    ageGroup: "Seniors",
  });
  const [activeApparatus, setActiveApparatus] = useState(Apparatus.Vault);
  const activeValues = [
    ...Object.values(activeFilters),
    apparatus.find((a) => a.type === activeApparatus)?.title || "",
  ];

  const handleFilterChange = (
    group: keyof typeof activeFilters,
    value: string
  ) => {
    setActiveFilters((prevState) => ({ ...prevState, [group]: value }));
  };

  return (
    <>
      <div className="hidden lg:block wrapper mt-14">
        <div className="space-y-12 mb-24">
          <div className="flex items-center justify-center gap-x-5">
            {Object.entries(filterCategories).map(([group, options], i) => (
              <div
                key={i}
                className="flex rounded-lg border border-purple-main bg-rich-black"
              >
                {options.map((option, j) => (
                  <button
                    key={j}
                    className={`cursor-pointer py-3 px-[30px] rounded-lg text-[#D9D9D9] transition-all duration-500 ease-in-out ${
                      activeFilters[group as keyof typeof activeFilters] ===
                      option
                        ? "bg-purple-main"
                        : ""
                    }`}
                    onClick={() =>
                      handleFilterChange(
                        group as keyof typeof activeFilters,
                        option
                      )
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-start justify-center gap-x-14">
            {apparatus.map((a, i) => (
              <label
                key={i}
                onClick={() => setActiveApparatus(a.type)}
                className={`cursor-pointer flex flex-col justify-start items-center gap-y-2 group transition-all duration-500 ease-in-out ${a.type === activeApparatus ? "size-24" : "size-14 hover:size-24"}`}
              >
                <span className="flex justify-center items-center size-14">
                  <img
                    src={`/apparatus/${a.type}.png`}
                    alt={a.title}
                    className={`transition-all duration-500 ease-in-out group-hover:size-14 ${a.type === activeApparatus ? "size-14" : "size-[45px]"}`}
                  />
                </span>

                <span
                  className={`text-nowrap ${a.type === activeApparatus ? "block" : "hidden"}`}
                >
                  {a.title}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div className="flex justify-between items-center py-1">
            <div className="flex items-center">
              <div className="w-20">Rank</div>
              <div className="w-[92px]">Team</div>
              <div className="w-[139px]">Bib</div>
              <div>Name</div>
            </div>

            <div className="flex items-center gap-x-6 [&>div]:w-[92px] [&>div]:text-center">
              <div>D</div>
              <div>E</div>
              <div>Pen</div>
              <div>Total</div>
            </div>
          </div>

          <div className="space-y-4">
            {resultsTabTableData.map((item, i) => (
              <React.Fragment key={i}>
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="w-20">
                      <span className="flex items-center justify-center size-8 py-[5px] px-3 bg-blue-main">
                        {i + 1}
                      </span>
                    </div>

                    <div className="flex items-center gap-x-2 w-[92px]">
                      <div
                        className={`w-5 h-[14px] rounded-xs bg-no-repeat bg-center bg-cover`}
                        style={{
                          boxShadow: "0px 1px 4px 0px #0000004D",
                          backgroundImage: `url('/flags/${item.country}.png')`,
                        }}
                      ></div>

                      <span className="uppercase">{item.country}</span>
                    </div>

                    <div className="w-[139px]">
                      <span>{item.bib}</span>
                    </div>

                    <div>
                      <span>{item.name}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {Array.from({ length: 2 }).map((_, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-x-6 [&>div]:w-[92px] [&>div]:text-center"
                      >
                        <div>{item.d}</div>
                        <div>{item.e}</div>
                        <div>{item.pen}</div>
                        <div>{item.total}</div>
                      </div>
                    ))}

                    <div className="flex justify-end items-center">
                      <div className="w-[92px] text-center text-yellow-main">
                        {item.total}
                      </div>
                    </div>
                  </div>
                </div>

                {i + 1 !== liveTabTableData.length && (
                  <div className="h-3 flex items-center">
                    <div
                      className="h-px w-full relative"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(106, 33, 244, 0) 0%, rgba(106, 33, 244, 0.9) 44.79%)",
                      }}
                    >
                      <div
                        className="w-[132px] h-3 absolute top-1/2 -translate-y-1/2 left-[728px]"
                        style={{
                          background:
                            "radial-gradient(49.08% 52.1% at 49.96% 50.21%, rgba(106, 33, 244, 0.5) 0%, rgba(18, 20, 45, 0) 100%)",
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="wrapper lg:hidden mt-6 space-y-6">
        <div className="flex justify-end items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className="flex items-center justify-center py-2 px-4 gap-x-2 rounded-lg bg-purple-main">
                <img
                  src="/svg-icons/filter.svg"
                  alt="filter"
                  className="size-4"
                />
                <span>Filter</span>
              </span>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="space-y-4 p-4 bg-rich-black border border-purple-main text-white -translate-x-4">
              {Object.entries(filterCategories).map(([group, options], i) => (
                <div key={i} className="space-y-2">
                  <div className="space-y-1">
                    {options.map((option, j) => (
                      <label
                        key={j}
                        className="flex items-center gap-x-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name={`filter-${group}`}
                          value={option}
                          checked={
                            activeFilters[
                              group as keyof typeof activeFilters
                            ] === option
                          }
                          onChange={() =>
                            handleFilterChange(
                              group as keyof typeof activeFilters,
                              option
                            )
                          }
                          className="hidden peer"
                        />
                        <span className="size-3 rounded-full border border-white bg-transparent peer-checked:bg-white"></span>
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <div className="space-y-2">
                <div className="space-y-1">
                  {apparatus.map((a, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-x-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="apparatus"
                        value={a.type}
                        checked={a.type === activeApparatus}
                        onChange={() => setActiveApparatus(a.type)}
                        className="hidden peer"
                      />
                      <span className="size-3 rounded-full border border-white bg-transparent peer-checked:bg-white"></span>
                      <div className="flex items-center gap-x-2">
                        <span className="text-sm">{a.title}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {activeValues.map((value, i) => (
            <div
              key={i}
              className="flex justify-center items-center py-1 px-3 rounded-full gap-x-2 bg-blue-main"
            >
              <button>
                <img
                  src="/svg-icons/cancel.svg"
                  alt="cancel"
                  className="size-3"
                />
              </button>
              <span className="text-sm">{value}</span>
            </div>
          ))}
        </div>

        <Accordion type="single" collapsible className="space-y-5">
          {resultsTabTableData.map((item, i) => (
            <AccordionItem key={i} value={i.toString()}>
              <AccordionTrigger>
                <div className="flex items-center gap-x-6">
                  <span className="flex items-center justify-center size-8 py-[5px] px-3 bg-blue-main">
                    {i + 1}
                  </span>

                  <span className="uppercase">{item.country}</span>

                  <span>{formatName(item.name)}</span>

                  <span>12.500</span>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <div className="space-y-4">
                  <div className="flex justify-end gap-x-7">
                    <span>D: {item.d.toFixed(3)}</span>
                    <span>E: {item.e.toFixed(3)}</span>
                    <span>P: {item.pen}</span>
                  </div>

                  <div className="space-y-3">
                    {liveTabTableData[0].stats?.map((stat, j) => (
                      <div
                        key={j}
                        className="flex justify-between items-center"
                      >
                        <div>{stat.name}</div>

                        <div className="flex items-center gap-x-3">
                          <span>{stat.value.toFixed(3)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default ResultsTab;
