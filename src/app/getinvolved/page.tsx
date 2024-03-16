"use client";
import MapboxMap from "@/components/map";
import EventHelper from "./eventhelper";

export default function GetInvolved() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div
          className="flex items-center justify-center md:p-16 p-2 pt-16 overflow-hidden"
          style={{
              // TODO: get better header image, current one is very pixelated 
            backgroundImage:
              "url(../_images/getinv.png), linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5))",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100vw",
            height: "40vh",
            position: "relative",
          }}
      >
          <div>  
            <h2 className="text-5xl font-semibold leading-33 tracking-normal text-center text-white">
            Get Involved
            </h2>
          </div>
      </div>
      
      <div className="max-w-5xl w-full -mt-20 z-10 items-center justify-between flex flex-col ">
        <div className="border flex flex-col items-center px-11 pb-6 shadow-lg bg-white">
          <h1 className="pt-11 border-none text-center text-lg md:text-4xl font-semibold font-sans dark:text-white">
            Volunteer Roles
          </h1>
          <div className="border-none items-center">
            <EventHelper />
          </div>
        </div>

        <div className="w-5/6 flex flex-col items-center mt-8">
          <h1 className="text-lg md:text-4xl font-semibold">Donate</h1>
          <p className="text-center text-m dark:text-white mt-4 mb-8">
            [Items can donate + address to donate] 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo!
            </p>
          {/* <MapboxMap /> */}
        </div>
      </div>

    </main>
  );
}
