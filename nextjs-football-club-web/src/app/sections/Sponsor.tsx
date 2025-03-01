import React from "react";

export const Sponsor = () => {
  const sponsors = [
    { src: "/assets/sponsor1.png", alt: "Sponsor 1" },
    { src: "/assets/sponsor2.png", alt: "Sponsor 2" },
    { src: "/assets/sponsor3.png", alt: "Sponsor 3" },
    { src: "/assets/sponsor1.png", alt: "Sponsor 1" },
  ];
  return (
    <>
      <div className="container mx-auto max-w-3xl p-8">
        <h1 className="text-5xl font-bold mb-4 flex justify-center barlow">
          Sponsor
        </h1>
        <div className="flex justify-center gap-4 p-4">
          {sponsors.map((image, index) => (
            <div key={index} className="w-[150px] h-[100px] overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
