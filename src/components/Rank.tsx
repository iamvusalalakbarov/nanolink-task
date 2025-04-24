import React from "react";

interface IRankProps {
  children: number;
}

const Rank: React.FC<IRankProps> = (props) => {
  return (
    <span className="flex items-center justify-center size-8 py-[5px] px-3 bg-blue-main">
      {props.children}
    </span>
  );
};

export default Rank;
