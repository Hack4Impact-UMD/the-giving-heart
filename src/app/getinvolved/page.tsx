"use client";
import MapboxMap from "@/components/map";
import EventHelper from "./eventhelper";
import { usePathname } from "next/navigation";
import { API } from "@/utils/constant";
import { useState, useEffect } from 'react';
import useSWR from "swr";
import axios from "axios";

export default function GetInvolved() {

  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    fetchData().then(data => setData(data));
  }, []);

  const description = data[0];
  const img = data[1];
  const donate = data[2];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between flex flex-col">
        <div className="relative">
          <div
            className="brightness-50 w-screen flex items-center justify-center sm:bg-contain align-middle font-sans"
            style={{
              backgroundImage: img,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: '200vh',
              height: "30vh",
              position: "relative",
            }}
          >
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-sans font-bold text-white">
                Get Involved
              </h1>
          </div>
        </div> 
        <div className="w-5/6 border flex flex-col items-center">
            <h1 className="border-none text-center text-lg md:text-4xl font-bold font-sans dark:text-white">
              Volunteer Roles
            </h1>
            <div className="border-none items-center">
              <EventHelper />
            </div>
        </div>

        <div className="w-5/6 flex flex-col items-center">
          <h1 className="text-lg md:text-4xl font-bold font-sans dark:text-whit">
            {donate}
          </h1>
          <p className="text-sm font-sans dark:text-white"> 
              {description}
          </p>
          <MapboxMap />
        </div>
      </div>
    </main>
  );
}

async function fetchData() {
  const arr: string[] = [];
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/get-involved`, {
    cache: "no-store",
  });
  const data = await response.json();
  if (!data.data) {
    return [];
  }
  const description = data.data.attributes.description;
  const image = data.data.attributes.banner;
  const donate = data.data.attributes.Donate;
  arr.push(description);
  arr.push(image);
  arr.push(donate);

  return arr;
}
