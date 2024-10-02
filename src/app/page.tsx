import { Metadata } from "next";
import { Utensils } from "lucide-react";
import { Users } from "lucide-react";
import { DollarSign } from "lucide-react";
import { ArrowLeftCircle } from "lucide-react";
import { ArrowRightCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { API } from "@/utils/constant";
import ImageCarousel from "../components/ui/ImageCarousel";
import AlertMessage from "@/components/ui/AlertMessage";
import { Card } from "@/components/ui/card";

export default async function Home() {
  const carouselImages = await fetchGallery();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative flex w-full bg-cover bg-[url('./_images/homepage_bg.png')] h-80">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

        <div className="relative flex items-center w-full h-full">
          <div className="w-full">
            {" "}
            <Card className="bg-white/90 p-6 shadow-lg w-full border-none rounded-none">
              {" "}
              {/* Added rounded-none */}
              <h2 className="text-lg text-gray-800 font-bold mb-2">
                Latest News
              </h2>
              <p className="text-sm text-gray-800 leading-relaxed mb-2">
                New address for correspondence and donations is 3714 Moody Ave.,
                Richmond, Va. 23225. Our phone number remains the same:
                804-749-4726!
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                ATTENTION - The Giving Heart has recently purged email addresses
                from our newsletter. If you haven't done so already, please sign
                up (again) for our Newsletter at the bottom of this page.
                Remember that subscribers get the latest information, including
                the ability to sign up before the general public!
              </p>
            </Card>
          </div>
        </div>
      </div>

      <div className="bg-white w-full">
        {/* Box with the "get involved" button */}
        <div className="flex-col align-center text-center justify-center w-5/6 lg:w-2/3 sm:h-80 h-44 bg-neutral-100 m-auto mt-10 mb-16 shadow shadow-black md:p-10 p-4">
          <h2 className="sm:pb-8 pb-2 text-xl font-semibold">
            Welcome to The Giving Heart!
          </h2>
          <p className="lg:pr-24 lg:pl-24 sm:text-lg text-xs">
            A 501c3 volunteer-based nonprofit serving the Greater Richmond
            Metropolitan Area. Learn more about how to get involved with our
            mission by clicking the button below. Our mission at the The Giving
            Heart is to provide food, fellowship and essential items to those in
            need.
          </p>
          <Button className="hover:text-black hover:bg-neutral-200 hover:border-solid hover:border hover:border-black bg-[#ed1c24] text-white text-sm md:text-md mt-6 sm:w-5/12 sm:mt-8 md:h-14 h-10 w-3/5 rounded-md">
            <a key="getinvolved" href="/getinvolved">
              Get Involved
            </a>
          </Button>
        </div>

        {/* <RenderParams className={classes.params} /> */}

        {/* Our impact so far box */}
        <div className="w-5/6 m-auto sm:h-44 lg:mb-20">
          <div className="p-auto  place-content-center flex  flex-col">
            <h1 className="text-center font-normal text-xl sm:text-3xl p-5">
              Our <span className="text-[#ed1c24]">Impact</span> So Far
            </h1>

            <div className="flex flex-col sm:flex-row align-center sm:justify-around w-full">
              <div className="flex flex-col justify-between text-center sm:w-1/3  my-5 ">
                <Users className="m-auto text-[#ed1c24] h-8 w-8 lg:h-12 lg:w-12" />
                <div>
                  <h1 className="text-xl p-2 sm:text-2xl font-semibold">
                    1,000
                  </h1>
                  <p className="text-md font-light text-gray-800">Volunteers</p>
                </div>
              </div>
              <div className="flex flex-col justify-between text-center sm:w-1/3  my-5">
                <DollarSign className="m-auto text-[#ed1c24] h-8 w-8 lg:h-12 lg:w-12" />
                <div>
                  <h1 className="text-xl p-2 sm:text-2xl font-semibold">
                    $100,000
                  </h1>
                  <p className="text-md font-light text-gray-800">Raised</p>
                </div>
              </div>
              <div className="flex flex-col justify-around text-center sm:w-1/3 my-5">
                <Utensils className="m-auto text-[#ed1c24] h-8 w-8 lg:h-12 lg:w-12" />
                <div>
                  <h1 className="text-xl p-2 sm:text-2xl font-semibold">
                    10,000
                  </h1>
                  <p className="text-md font-light text-gray-800">
                    Meals Provided
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <RenderParams className={classes.params} /> */}

        {/* Gallery */}
        <div className="mx-auto mt-5 mb-20">
          <h1 className="text-center text-3xl p-10">Gallery</h1>
          <ImageCarousel images={carouselImages} />
        </div>

        <div className="flex flex-col w-full sm:flex-row justify-around lg:mt-32 mb-10 mt-10">
          <div className="w-full sm:w-1/2 py-6 px-10 text-center sm:text-left">
            <h2 className="font-semibold text-xl md:text-2xl lg:text-4xl">
              Watch Our Introduction Video
            </h2>
            <p className="text-gray-500 text-xs mt-3 md:text-lg lg:text-xl">
              Video message about The Giving Heart from the mayor of the city
            </p>
          </div>
          <div className="w-full sm:w-1/3 flex justify-center items-center sm:items-start mt-5 sm:mt-0">
            {" "}
            {/* Adjusted classes for responsive layout */}
            <iframe
              width="360"
              height="640"
              src="https://www.youtube.com/embed/9QJb9x2ty7E"
              title="Message from our Mayor"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

async function fetchGallery() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-page?populate=gallery`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  if (!data.data) {
    return [];
  }
  const galleryImages = data.data.attributes.gallery.data;

  const carouselImages = galleryImages.map(
    (image: { attributes: { formats: { large: { url: any } } } }) =>
      image.attributes.formats.large.url
  );

  return carouselImages;
}

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the Home Page",
};
