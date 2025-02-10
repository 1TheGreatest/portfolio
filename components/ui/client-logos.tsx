import React from "react";
import Image from "next/image";

const ClientLogo = ({ svg }: { svg: string }) => {
  return (
    <div className="flex px-3 md:px-4 lg:px-10 sm:py-2 md:py-3 lg:py-4 border border-navcolor rounded-lg items-center justify-center filter grayscale">
      <div className="relative w-8 sm:w-12 md:w-16 lg:w-20 h-6">
        <Image
          src={`/icons/${svg}`}
          alt="client logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ClientLogo;
