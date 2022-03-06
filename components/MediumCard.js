import React from "react";
import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-30 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      <h1 className="text-2xl mt-3">{title}</h1>
    </div>
  );
}

export default MediumCard;
