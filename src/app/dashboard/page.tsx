import Navbar from "../navbar";
import Image from "next/image";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Navbar />
        <h1>Dashboard</h1>
        <h1
        // className={classes.title}
        >
          Welcome, [firstName]!
        </h1>

        <div
        // className={classes.grayContainer}
        >
          Account Type: Volunteer
        </div>

        <div
        // className={classes.eventContainer}
        >
          <h2> Events Information </h2>
          <p
          // className={classes.eventInfoText}
          >
            You must sign up for an event to volunteer for it.
          </p>

          {/* placeholder cards */}
          {/* <CardContainer> */}
          <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Event 1</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
            {/* <Card
              className="test"
              showCategories={false}
              hideImagesOnMobile={true}
              title="Event 1"
              relationTo="projects"
              orientation="vertical"
            ></Card>
            <Card
              className="test"
              showCategories={false}
              hideImagesOnMobile={true}
              title="Event 2"
              relationTo="projects"
              orientation="vertical"
            ></Card>
            <Card
              className="test"
              showCategories={false}
              hideImagesOnMobile={true}
              title="Event 3"
              relationTo="projects"
              orientation="vertical"
            ></Card>
            <Card
              className="test"
              showCategories={false}
              hideImagesOnMobile={true}
              title="Event 4"
              relationTo="projects"
              orientation="vertical"
            ></Card>
            <Card
              className="test"
              showCategories={false}
              hideImagesOnMobile={true}
              title="Event 5"
              relationTo="projects"
              orientation="vertical"
            ></Card>
            <Card
              className="test"
              showCategories={false}
              hideImagesOnMobile={true}
              title="Event 6"
              relationTo="projects"
              orientation="vertical"
            ></Card> */}
            {/* </CardContainer> */}
          </div>
        </div>
      </div>
    </main>
  );
}
