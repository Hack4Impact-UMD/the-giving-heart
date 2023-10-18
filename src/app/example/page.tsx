import EventHelper from "./eventHelper";
import RoleHelper from "./roleHelper";
import Navbar from "../navbar";

export default function Example() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Navbar />
        <div>
          <EventHelper />
        </div>
        <div>
          <RoleHelper />
        </div>
      </div>
    </main>
  );
}
