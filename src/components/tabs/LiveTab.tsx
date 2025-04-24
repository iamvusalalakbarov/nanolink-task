import React from "react";
import { liveTabTableData } from "@/lib/mockData.ts";
import { Status } from "@/lib/types.ts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import TableRowDivider from "@/components/TableRowDivider.tsx";
import GymnastCountry from "@/components/GymnastCountry.tsx";
import Rank from "@/components/Rank.tsx";

const tableHeaders = ["App", "AA", "Team"];

const LiveTab = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block wrapper mt-24 space-y-12">
        {/* Table Headers */}
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

        {/*Table Content */}
        <div className="space-y-4">
          {liveTabTableData.map((item, index) => (
            <React.Fragment key={index}>
              {/* Table Row */}
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
                    <GymnastCountry country={item.country} />
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
                          <Rank>{stat.rank}</Rank>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {index + 1 !== liveTabTableData.length && <TableRowDivider />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden wrapper mt-12">
        <Accordion type="single" collapsible className="space-y-5">
          {liveTabTableData.map((item, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger
                withoutArrow={item.status !== Status.Default}
                onClick={(e) => {
                  if (item.status !== Status.Default) {
                    e.preventDefault();
                  }
                }}
              >
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
                          <Rank>{stat.rank}</Rank>
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
