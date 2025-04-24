import React from "react";
import { Country } from "@/lib/types.ts";

interface IGymnastCountry {
  country: Country;
}

const GymnastCountry: React.FC<IGymnastCountry> = (props) => {
  return (
    <div className="flex items-center gap-x-2">
      <div
        className={`w-5 h-[14px] rounded-xs bg-no-repeat bg-center bg-cover`}
        style={{
          boxShadow: "0px 1px 4px 0px #0000004D",
          backgroundImage: `url('/flags/${props.country}.png')`,
        }}
      ></div>

      <span className="uppercase">{props.country}</span>
    </div>
  );
};

export default GymnastCountry;
