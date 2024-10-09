import React, { useState } from "react";

async function fetchWhoWeAre() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/about-us-page?`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  if (!data.data) {
    return [];
  }
  const info = [
    data.data.attributes.subtitle_1,
    data.data.attributes.description_1,
  ];

  return info;
}

export default async function WhoWeAre() {
  const info = await fetchWhoWeAre();

  return (
    <div className="h-full p-4 md:text-center text-center text-black md:px-20">
      <div className="mt-12 p-4">
        <h1 className="text-3xl font-semibold">{info[0]}</h1>
      </div>

      {/**TODO: need to add the below as a single type in Strapi for user to edit it*/}
      <p className="text-lg text-gray-700">{info[1]}</p>
    </div>
  );
}
