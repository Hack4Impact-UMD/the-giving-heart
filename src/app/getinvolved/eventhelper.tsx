"use client";
import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function EventHelper() {
  const address = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/volunteer-roles`;
  const auth = `${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`;

  const fetcher = async (url: any) =>
    await axios.get(url).then((res) => res.data);

  let { data, error } = useSWR(address, fetcher);

  if (error) return <div>Error loading data...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="w-full">
      {data["data"].map((item: any) => (
        <div key="id" className="py-5">
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
          </a>
        </div>
      ))}
      {
        <Button className="hover:text-black hover:bg-neutral-200 hover:border-solid hover:border hover:border-black bg-[#ed1c24] text-white text-sm md:text-md  sm:w-5/12 sm:mt-4 md:h-14 h-10 w-3/5 rounded-md">
          <a key="getinvolved" href="/dashboard">
            Register now
          </a>
        </Button>
      }
    </div>
  );
}
