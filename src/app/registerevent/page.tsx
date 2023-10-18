import Navbar from "../navbar";
import BasicCard from "./registerEvent";

export default function RegisterEvent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Register Event</h1>
        <BasicCard
          eventName="being the goat"
          eventDate="everyday"
          eventTime="all day"
          eventLocation="the farm"
          volunteerRole="the goat"
          volunteerShifts="24/7 365"
          isMVP={true}
          eventActive={true}
        />
      </div>
    </main>
  );
}
