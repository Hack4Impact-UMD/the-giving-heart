import { EventCard } from "./eventCard";
import Image from "../../../node_modules/next/image";
import header_image from ".././_images/header-image.jpg";

//placeholder event data. replace with fetched data
const eventData = [
  {
    title: "Event 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus dui dignissim dui pellentesque, non pellentesque dolor dictum. In vel fermentum sem. Integer tempor congue porta. Integer in enim nibh. Nullam convallis ligula ut turpis vestibulum accumsan.",
    roles: "[Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], etc.",
    date: "Nov. 1, 2023",
    start_time: "10:00 AM",
    end_time: "2:00 PM",
    location: "Main Location"
  },
  {
    title: "Event 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus dui dignissim dui pellentesque, non pellentesque dolor dictum. In vel fermentum sem. Integer tempor congue porta. Integer in enim nibh. Nullam convallis ligula ut turpis vestibulum accumsan.",
    roles: "[Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], etc.",
    date: "Nov. 1, 2023",
    start_time: "10:00 AM",
    end_time: "2:00 PM",
    location: "Main Location"
  },
  {
    title: "Event 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus dui dignissim dui pellentesque, non pellentesque dolor dictum. In vel fermentum sem. Integer tempor congue porta. Integer in enim nibh. Nullam convallis ligula ut turpis vestibulum accumsan.",
    roles: "[Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], etc.",
    date: "Nov. 1, 2023",
    start_time: "10:00 AM",
    end_time: "2:00 PM",
    location: "Main Location"
  },
  {
    title: "Event 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus dui dignissim dui pellentesque, non pellentesque dolor dictum. In vel fermentum sem. Integer tempor congue porta. Integer in enim nibh. Nullam convallis ligula ut turpis vestibulum accumsan.",
    roles: "[Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], etc.",
    date: "Nov. 1, 2023",
    start_time: "10:00 AM",
    end_time: "2:00 PM",
    location: "Main Location"
  },
  {
    title: "Event 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus dui dignissim dui pellentesque, non pellentesque dolor dictum. In vel fermentum sem. Integer tempor congue porta. Integer in enim nibh. Nullam convallis ligula ut turpis vestibulum accumsan.",
    roles: "[Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], etc.",
    date: "Nov. 1, 2023",
    start_time: "10:00 AM",
    end_time: "2:00 PM",
    location: "Main Location"
  },
  {
    title: "Event 6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus dui dignissim dui pellentesque, non pellentesque dolor dictum. In vel fermentum sem. Integer tempor congue porta. Integer in enim nibh. Nullam convallis ligula ut turpis vestibulum accumsan.",
    roles: "[Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], [Volunteer role], etc.",
    date: "Nov. 1, 2023",
    start_time: "10:00 AM",
    end_time: "2:00 PM",
    location: "Main Office"
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
                card_header_image={header_image}
                title={event.title}
                description={event.description}
                roles={event.roles}
                date={event.date}
                start_time={event.start_time}
                end_time={event.end_time}
                location={event.location}
              />
          ))}
        </div>
      </div>
    </main>
  );
}
