"use client";
import useSWR from "swr";
import axios from "axios";
import { useState } from "react";

export default function EventHelper() {
  const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/volunteer-roles`;
  const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;

  const fetcher = async (url: any) =>
    await axios
      .get(url, {
        headers: { Authorization: `Bearer ${auth}` },
      })
      .then((res) => res.data);

  let { data, error } = useSWR(address, fetcher);

  if (error) return <div>Error loading data...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="w-full">
      {data["data"].map((item: any) => (
        <div key="id">
          <a
            href="#"
            className="h-full w-full md:max-w-lg flex flex-row items-center justify-between space-x-4 border-none block max-w-sm p-6 bg-white rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="w-full">
              <h5 className="mb-2 text-sm md:text-xl font-sans tracking-tight text-gray-900 dark:text-white">
                {item["attributes"]["title"]}
              </h5>
              <p className="font-sans text-gray-700 font-light text-xs dark:text-gray-400">
                {item["attributes"]["description"]}
              </p>
            </div>
            <div className="text-center box-border h-28 w-full bg-gray-400">
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
