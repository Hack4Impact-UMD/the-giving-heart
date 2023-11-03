import { EventCard } from "./eventCard";
import header_image from ".././_images/header-image.jpg";

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
    <main className="relative bg-[#860E13] flex min-h-screen flex-col justify-center p-16">
      <h1 className="font-medium font-openSans text-5xl mb-4 text-white flex items-center justify-center"> Welcome! </h1>

      <div className="bg-white w-full flex flex-col items-center justify-center p-4 mt-6 mb-10">
        <h2 className="font-semibold text-3xl mb-2 pt-4"> Upcoming Events Information </h2>
        <p className="text-[#9D5425] italic text-lg mb-4"> <strong> Note:</strong> You must register for an event to volunteer for it. </p>
        <div className="border-2 border-[#838383] text-[#838383] py-2 px-4 rounded-full inline-block mb-4 min-w-min"> Account Type: Volunteer </div>
      </div>


      <div className="lg:m-10">
        <div className="w-full self-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10">
          {eventData.map((event, index) => (
              <EventCard
                key={index}
                image={header_image}
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
