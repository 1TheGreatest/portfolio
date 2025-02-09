import React from "react";
import Image from "next/image";

const ClientLogo = ({ svg }: { svg: string }) => {
  return (
    <div className="flex sm:px-3 md:px-4 lg:px-7 sm:py-2 md:py-3 lg:py-4 border border-navcolor rounded-lg items-center justify-center filter grayscale">
      <div className="relative w-8 h-3 sm:w-12 sm:h-4 md:w-16 md:h-5 lg:w-20 lg:h-6">
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
