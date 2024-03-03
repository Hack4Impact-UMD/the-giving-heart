"use client";

import { PayLevel } from "./payLevel";

export default function FriendsOfTheFeast() {
  
    return (
      <main className="flex min-h-screen flex-col items-center">
        <div
        className="flex items-center justify-center md:p-16 p-2 pt-16 overflow-hidden"
        style={{
            // TODO: get better header image, current one is very pixelated 
          backgroundImage:
            "url(../_images/friends-of-the-feast.png), linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "40vh",
          position: "relative",
        }}
      >
        <div>
          <h2 className="text-5xl font-semibold leading-33 tracking-normal text-center text-white">
            Friends of The Feast
          </h2>
        </div>
      </div>


      <div className="flex-col align-center text-center justify-center w-5/6 lg:w-2/3 m-auto mt-10 mb-10 md:p-10 p-4">
        <p className="lg:pr-24 lg:pl-24 sm:text-lg text-xs">
          Friends of the Feast (formerly called Table Sponsors) is a unique way for many in
          our Community to support The Giving Heart&apos;s Community Thanksgiving Feast. As a 
          &quot;Feast Friend&quot; we offer options for individuals, families, groups, Churches
          and small businesses.
        </p>
        <br/>
        <p className="lg:pr-24 lg:pl-24 sm:text-lg text-xs">
          This is a great way for individuals or families to send a Thanksgiving message or 
         to honor a loved one during this time.
        </p>
        <br/>
          <h2 className="sm:pb-8 pb-2 text-xl font-semibold">
            Friends of the Feast Levels
          </h2>
          <p className="lg:pr-24 lg:pl-24 sm:text-lg text-xs text-left">
          $200.00 - Business Level: Includes inclusion on The Giving Heart website with a link to your site.
          </p>
          <br/>
          <p className="lg:pr-24 lg:pl-24 sm:text-lg text-xs text-left">
          $100.00 - Church, Group, Nonprofit: Listing on our website with a link to your site.
          </p>
          <br/>
          <p className="lg:pr-24 lg:pl-24 sm:text-lg text-xs text-left">
          $50.00 - Individuals/Family Level: Offers dedications, shout outs, memorials or Holiday greetings on our website
          </p>
        </div>


        {/* Pay Here Section */}
        <h2 className="sm:pb-8 text-xl font-semibold">
            Pay Here
        </h2>

        <div className="flex flex-col sm:flex-row pb-10">
          <PayLevel type="Business Listing" donation="200"/>
          <PayLevel type="Church, Nonprofit, Club Listing" donation="100"/>
          <PayLevel type="Personal Dedication" donation="50"/>
        </div>

      </main>
    );
  };
  