import { EventCard } from "./eventCard";
import RegisterEvent from "../registerevent/page";

//placeholder event data. replace with fetched data
const eventData = [
  {
    title: "Event 1",
    description: "Description for Event 1. ",
    roles: "Role 1, Role 2, Role 3",
  },
  {
    title: "Event 2",
    description: "Description for Event 2.",
    roles: "Role 1",
  },
  {
    title: "Event 3",
    description: "Description for Event 3.",
    roles: "Role 1, Role 2",
  },
  {
    title: "Event 4",
    description: "Description for Event 4",
    roles: "Role 1, Role 2, Role 3, Role 4, Role 5",
  },
  {
    title: "Event 5",
    description: "Description for Event 5.",
    roles: "Role 1, Role 2",
  },
  {
    title: "Event 6",
    description: "Description for Event 6.",
    roles: "Role 1, Role 2, Role 3",
  },
];

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-16">
      <div className="text-left mb-4">
        <h1 className="font-semibold text-5xl mb-4"> Welcome, [firstName]! </h1>
        <div className="bg-neutral-400 text-white py-2 px-4 md:rounded-md rounded-full inline-block mb-4 min-w-min"> Account Type: Volunteer </div>
      </div>

      <div className="lg:m-10">
        <div className="text-left">
          <h2 className="font-semibold text-3xl mb-2"> Events Information </h2>
          <p className="text-red-500 italic text-lg font-bold mb-4"> You must sign up for an event to volunteer for it. </p>
        </div>

        <div className="w-full self-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10">
          {eventData.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                description={event.description}
                roles={event.roles}
              />
          ))}
        </div>
      </div>
      <RegisterEvent></RegisterEvent>
    </main>
  );
}
