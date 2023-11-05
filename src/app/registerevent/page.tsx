import Navbar from "../navbar";
import BasicCard from "./registerEvent";

export default function RegisterEvent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Register Event</h1>
        {/* <Navbar />   */}
        {/* <h1>Register Event</h1> */}
        <BasicCard
          eventName="[Event name]"
          eventDescription="[Event description]"
          eventDate="everyday"
          eventStartTime="[Start time]"
          eventEndTime="[End time]"
          eventLocation="[Event location]"
          volunteerRole="[Roles here...]"
          volunteerShifts="[Shifts here...]"
          eventActive={true}
        />
      </div>
    </main>
  );
}
