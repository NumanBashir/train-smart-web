"use client";

import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage:
            "url(https://jfcsports.co.uk/wp-content/uploads/2023/07/bigstock-Soccer-Training-And-Children-476974929.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-start">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold barlow">
              Velkommen til Taastrup FC
            </h1>
            <p className="mb-5 barlow text-lg">
              Hos Taastrup FC handler det om fællesskab, udvikling og passion
              for fodbold. Vi stræber efter at skabe et miljø, hvor spillere i
              alle aldre kan vokse både på og uden for banen. Uanset om du er
              nybegynder eller erfaren, har vi plads til dig. Bliv en del af
              Taastrup FC – hvor sammenhold skaber sejre!
            </p>
            <button className="btn green_btn">BLIV MEDLEM</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
