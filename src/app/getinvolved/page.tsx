"use client";
import MapboxMap from "@/components/map";
import EventHelper from "./eventhelper";

export default function GetInvolved() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between flex flex-col">
        <div className="relative">
          <div
            className="brightness-50 w-screen flex items-center justify-center sm:bg-contain align-middle font-sans"
            style={{
              backgroundImage:
                "url(https://s3-alpha-sig.figma.com/img/3d9f/533e/7b3a91405e9b8b8200346a425beddb5c?Expires=1702252800&Signature=hXrW7GnPSoC1ODX~1LUYVH0vjnxKHPS0~cqmp4tkkN4GAdO60l8CMNiD2LdO~3EB9kqvS40E4APNqWO-GU1CFUkXyX5~7KHqeNEdraCQPY90CzACk~S53EPsE0Z4jsxp9P7pYh4CIQ0dYBDQxY8nmpCt0m9gb-Hl2X7PDLaQwy3L9AmMwA~7xnYGn37bW7pWqUjsF~wASuy2LxDTD9JrahGTmcNd-NGVQGpNUfZYvAZkqFMCpqpCI1n0WN4VwWu5PqUxHa8tdlUIFE5cRzcqplXsd~E9cJU835vIBGOVkBN7gdfv9GmX8iG9l1poDEcpQKcbOiDMQY2SG1FIt4qzrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              // width: '200vh',
              height: "30vh",
              position: "relative",
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-sans font-bold text-white">
              Get Involved
            </h1>
          </div>
        </div>
        <div className="w-5/6 border flex flex-col items-center">
          <h1 className="border-none text-center text-lg md:text-4xl font-semibold font-sans dark:text-white">
            Volunteer Roles
          </h1>
          <div className="border-none items-center">
            <EventHelper />
          </div>
        </div>

        <div className="w-5/6 flex flex-col items-center mt-8">
          <h1 className="text-lg md:text-4xl font-semibold dark:text-whit">
            Donate
          </h1>
          <p className="text-center text-m dark:text-white mt-4 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <MapboxMap />
        </div>
      </div>
    </main>
  );
}
