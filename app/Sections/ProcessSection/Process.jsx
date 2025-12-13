import React from "react";
import ProcessHeading from "../../Componets/ProcessComponent/ProcessHeading";
import ProcessCardGrid from "../../Componets/ProcessComponent/ProcessCardGrid";
import ProcessButton from "../../Componets/ProcessComponent/ProcessButton";

const Process = () => {
  return (
    <div className="bg-[#111831] py-20">
      <ProcessHeading />
      <ProcessCardGrid />
      <ProcessButton />
    </div>
  );
};

export default Process;
