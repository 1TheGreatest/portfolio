import React from "react";
import Image from "next/image";

const ClientLogo = ({ svg }: { svg: string }) => {
  return (
    <div className="flex w-[12.5vw] h-[8.5vh] border border-navcolor rounded-lg items-center justify-center text-grayscale(100%)">
      <Image src={`/icons/${svg}`} alt="client logo" width={100} height={24} />
    </div>
  );
};

export default ClientLogo;
