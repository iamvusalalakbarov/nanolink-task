import React from "react";
import { liveTabTableData } from "@/lib/mockData.ts";
import { Status } from "@/lib/types.ts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";

const tableHeaders = ["App", "AA", "Team"];

const LiveTab = () => {
  return (
    <>
      <div className="hidden lg:block wrapper mt-24 space-y-12">
        <div className="flex justify-end items-center gap-x-12">
          {tableHeaders.map((tableHeader, index) => (
            <div
              key={index}
              className="w-[92px] h-6 flex justify-center items-center text-white"
            >
              {tableHeader}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {liveTabTableData.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center">
                {item.status === Status.InquirySubmitted && (
                  <div className="py-1 mr-4">
                    <span className="text-xl leading-6 tracking-[0] text-yellow-main">
                      Inquiry Submitted
                    </span>
                  </div>
                )}

                <div
                  className={`flex items-center gap-x-9 ${item.status !== Status.InquirySubmitted ? "w-[431px]" : "mr-8"}`}
                >
                  <div>
                    <img
                      src={`/apparatus/${item.apparatus}.png`}
                      alt={item.apparatus}
                      className="w-12 h-8"
                    />
                  </div>

                  <div className="py-1 w-[72px]">
                    <div className="flex items-center gap-x-2">
                      <div
                        className={`w-5 h-[14px] rounded-xs bg-no-repeat bg-center bg-cover`}
                        style={{
                          boxShadow: "0px 1px 4px 0px #0000004D",
                          backgroundImage: `url('/flags/${item.country}.png')`,
                        }}
                      ></div>

                      <span className="uppercase">{item.country}</span>
                    </div>
                  </div>

                  <div className="py-1 w-6">
                    <span>{item.bib}</span>
                  </div>

                  <div className="py-1">
                    <span>{item.name}</span>
                  </div>
                </div>

                {item.status === Status.Wait || item.status === Status.Go ? (
                  <div className="flex-1">
                    <div
                      className={`w-[95px] flex justify-center items-center rounded-lg py-1 px-3 font-medium ${item.status === Status.Wait ? "bg-yellow-light" : "bg-green-light"}`}
                    >
                      {item.status}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center py-1 gap-x-7">
                      <span>D: {item.d!.toFixed(3)}</span>
                      <span>E: {item.e!.toFixed(3)}</span>
                      <span>P: {item.p}</span>
                    </div>

                    <div className="flex items-center gap-x-12 ml-auto">
                      {item?.stats?.map((stat, j) => (
                        <div key={j} className="flex items-center gap-x-3">
                          <span>{stat.value.toFixed(3)}</span>
                          <span className="flex items-center justify-center size-8 py-[5px] px-3 bg-blue-main">
                            {stat.rank}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {index + 1 !== liveTabTableData.length && (
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

      <div className="lg:hidden wrapper mt-12">
        <Accordion type="single" collapsible className="space-y-5">
          {liveTabTableData.map((item, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger withoutArrow={item.status !== Status.Default}>
                <div className="flex flex-wrap items-center justify-between w-full">
                  {item.status === Status.InquirySubmitted && (
                    <div className="mb-2.5 text-yellow-main font-medium w-full">
                      Inquiry Submitted
                    </div>
                  )}

                  <div className="flex items-center gap-x-5">
                    <img
                      src={`/apparatus/${item.apparatus}.png`}
                      alt={item.apparatus}
                      className="w-10 h-8"
                    />

                    <div className="py-1">
                      <span className="uppercase">{item.country}</span>
                    </div>

                    <div>{item.name}</div>

                    <div className="py-1">
                      <span>{item?.stats?.[0]?.value.toFixed(3)}</span>
                    </div>
                  </div>

                  {(item.status === Status.Wait ||
                    item.status === Status.Go) && (
                    <div
                      className={`w-16 flex justify-center items-center rounded-lg py-1 px-3 font-medium ${item.status === Status.Wait ? "bg-yellow-light" : "bg-green-light"}`}
                    >
                      {item.status}
                    </div>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {item.d && item.e && item.p && (
                    <div className="flex justify-end gap-x-7">
                      <span>D: {item.d.toFixed(3)}</span>
                      <span>E: {item.e.toFixed(3)}</span>
                      <span>P: {item.p}</span>
                    </div>
                  )}

                  <div className="space-y-3">
                    {item?.stats?.map((stat, j) => (
                      <div
                        key={j}
                        className="flex justify-between items-center"
                      >
                        <div>{stat.name}</div>

                        <div className="flex items-center gap-x-3">
                          <span>{stat.value.toFixed(3)}</span>
                          <span className="flex items-center justify-center size-8 py-[5px] px-3 bg-blue-main">
                            {stat.rank}
                          </span>
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

export default LiveTab;
