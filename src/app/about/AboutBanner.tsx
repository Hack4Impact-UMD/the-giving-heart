import React, { useState } from "react";

async function fetchAboutBanner() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/about-us-page?populate=banner`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  if (!data.data) {
    return [];
  }
  const banner = data.data.attributes.banner.data.attributes.url;

  return banner;
}

export default async function AboutBanner() {
  const banner = await fetchAboutBanner();
  return (
    <div
      className="flex items-center justify-center md:p-16 p-2 pt-16 overflow-hidden"
      style={{
        backgroundImage:
          "url(" +
          banner +
          "), linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "40vh",
        position: "relative",
      }}
    >
      <div>
        <h2 className="text-5xl font-semibold leading-33 tracking-normal text-center text-white">
          About Us
        </h2>
        <p className="text-center text-2xl font-semibold text-gray-300 italic">
          Est. 2002
        </p>
      </div>
    </div>
  );
}
