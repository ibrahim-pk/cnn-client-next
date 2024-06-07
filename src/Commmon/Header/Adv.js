import Image from "next/image";
import React from "react";

function Adv() {
  return (
    <div className="">
      <div className="h-16 md:h-32 lg:h-32 bg-light flex items-center justify-center flex-col">
        <Image
          src="/images/Header/bartaloy24.png" 
          alt="bartaloy24"
          className="h-24 md:h-48 lg:h-48" 
           height="200"
           width="250"
          />
      </div>
    </div>
  );
}

export default Adv;
