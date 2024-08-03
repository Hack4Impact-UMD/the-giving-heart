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

        <div className="w-5/6 flex flex-col items-center mt-8 pb-16">
          <h1 className="text-lg md:text-4xl font-semibold">Donate</h1>
          <div className="text-center text-m dark:text-white mt-4 mb-8">
            <p className="mb-4">
              The Giving Heart is happy to accept donations that can be
              distributed to our Thanksgiving guests. Please call{" "}
              <a href="tel:804-749-4726" className="text-red-500">
                804-749-4726
              </a>{" "}
              to discuss what you have to offer. You can also{" "}
              <a
                href="https://thegivingheart.org/wp-content/uploads/2020/10/donation-box-for-newsletter.docx"
                className="text-red-500"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                download our donation information
              </a>{" "}
              that includes a collection box flier.
            </p>
            <p className="mb-4">
              <strong>&quot;Wish List&quot;:</strong> Interested in donating
              specific needs for food preparation or to hand out to our guests?
              Check out our{" "}
              <a
                href="https://a.co/1c1y7rQ"
                className="text-red-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amazon Wish List
              </a>
              . Don&apos;t forget that you can add The Giving Heart to your
              Amazon Smiles list!
            </p>
            <p className="mb-4">
              <strong>Collection Ideas:</strong> If you would like to start your
              own collection (great for schools, churches, and even
              neighborhoods), here are a few items that we&apos;ve identified.
            </p>
            <ul className="list-disc list-inside mb-4 text-left">
              <li>Toiletries</li>
              <li>New and Gently Used Work Boots</li>
              <li>Non-Perishable Foods</li>
              <li>New and Gently Used Hats, Gloves, Scarves</li>
              <li>Personal Hygiene Items</li>
              <li>New and Gently Used Blankets, Throws, or Sleeping Bags</li>
              <li>New and Gently Used Athletic Shoes</li>
              <li>Hand/Toe Warmers</li>
            </ul>
            <p className="mb-4">
              Thank you for generously donating items. Our drop-off location is
              noted below. More locations will be posted later.
            </p>
            <p>
              <strong>Drop-off Location:</strong>
              <br />
              Greater Richmond Convention Center
              <br />
              Drop-offs (at the Exhibition Hall) are available from 9 am to 1 pm
              from November 21st to November 23rd. Call us at{" "}
              <a href="tel:804-749-4726" className="text-red-500">
                804-749-4726
              </a>{" "}
              to discuss.
            </p>
          </div>
          <MapboxMap />
        </div>
      </div>
    </main>
  );
}
