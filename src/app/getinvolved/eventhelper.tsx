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
    <div>
      {data["data"].map((item: any) => (
        <div key="id">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item["attributes"]["title"]}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item["attributes"]["description"]}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
}
