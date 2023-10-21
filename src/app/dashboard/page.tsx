import EventCard from "./eventCard";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col justify-center p-24">
      <div className="text-left mb-4">
        <h1 className="font-semibold text-3xl mb-4">Welcome, [firstName]!</h1>
        <div className="bg-neutral-400 text-white py-2 px-4 md:rounded-md rounded-full inline-block mb-4">Account Type: Volunteer</div>
        <h2 className="font-semibold text-xl mb-2">Events Information</h2>
        <p className="text-red-500 italic font-bold mb-4">You must sign up for an event to volunteer for it.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
        <EventCard
          title="Event 1"
          description="Description for Event 1. This is a longer description to test the responsiveness of the card."
          roles="Role 1, Role 2"
        />
        <EventCard
          title="Event 2"
          description="Description for Event 2."
          roles="Role 3"
        />
        <EventCard
          title="Event 3"
          description="Description for Event 3."
          roles="Role 4, Role 5"
        />
        <EventCard
          title="Event 4"
          description="Description for Event 1. This is a longer description to test the responsiveness of the card."
          roles="Role 1, Role 2"
        />
        <EventCard
          title="Event 5"
          description="Description for Event 2."
          roles="Role 3"
        />
        <EventCard
          title="Event 6"
          description="Description for Event 3."
          roles="Role 4, Role 5"
        />
      </div>
    </main>
  );
}
