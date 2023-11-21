"use client";
import MapboxMap from "@/components/map";
import EventHelper from "./eventhelper";

export default function GetInvolved() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between flex flex-col">
        <h1>Get Involved</h1>
        <div
          className="w-screen flex items-center justify-center sm:bg-contain align-middle font-sans"
          style={{
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/3d9f/533e/7b3a91405e9b8b8200346a425beddb5c?Expires=1701043200&Signature=CJhqEZs6cKN1YmeGEo6Qd4RlHSc4A9wfX3Eopvt-7edn~fQfFufoJW4Unb5Dlt6-3Ka62xic1RTUAm7-iTya4LIlhJghFBrrtJNgLXLNwxpFv~oek7HZSHGiO3eFvjcXWAWFiIshB-JXHTOclTwE9bo2FZxY8er7z6m-R3RbflnbsCfY6Cms2zAnVN9Iflvxtpb7lbuBOkEDoZgfru2oX6dPwRTlAHlV1wxtdEnJKLI~TJyv28OX0tl0riGF8rnyH8uk01NZXJlD2ofpB1t7txDipPlWM4unAgBpPe4L9uCkz0wyQO2V7zgDdg99RNMTy8Tm6DKKUNo3O~JSJpkYeQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // width: '200vh',
            height: "30vh",
            position: "relative",
          }}
        >
          <div>
            <h1 className="text-5xl font-sans font-bold text-white">
              Get Involved
            </h1>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold font-sans dark:text-white">
              Volunteer Roles
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div>
            <EventHelper />
          </div>
          <h1 className="text-4xl font-bold font-sans dark:text-white">
            Donate
          </h1>
          <p className="font-sans dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br></br>eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            <br></br> nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
        <MapboxMap />
      </div>
    </main>
  );
}
