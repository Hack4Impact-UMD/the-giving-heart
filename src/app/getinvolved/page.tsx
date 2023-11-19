"use client";
import MapboxMap from "@/components/map";

export default function GetInvolved() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between flex flex-col">
        <h1>Get Involved</h1>
        <MapboxMap />
      </div>
    </main>
  );
}
