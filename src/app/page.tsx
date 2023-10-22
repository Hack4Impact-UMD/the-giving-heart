import Image from "next/image";
import Navbar from "./navbar";
import Footer from "./footer";
import { Metadata } from "next";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      {/* Setting up the background image and the text to the side */}
      <div className="flex w-full bg-neutral-400 text-white h-80" >

        <div className="sm:w-1/2 h-full p-4 md:text-center text-left">
          <div className="mt-12"><h1 className="text-3xl">Background Image</h1></div>
        </div>

        <div className="w-1/2 md:p-16 p-2 pt-16">
          <h2 className="text-left text-sm md:text-3xl pt-3 pb-3">The Giving Heart</h2>
          <p className="md:text-lg text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

      </div>

      <div className="bg-white w-full">

          {/* Box with the "get involved" button */}
          <div className="flex-col align-center text-center justify-center w-5/6 lg:w-2/3 sm:h-80 h-44 bg-neutral-100 m-auto mt-10 mb-16 shadow shadow-black md:p-10 p-4">
            <h2 className="sm:pb-8 pb-2 sm:text-2xl text-sm font-semibold"> 
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <p className="lg:pr-24 lg:pl-24 sm:text-lg text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              euismod nisi porta lorem mollis aliquam.
              Lorem ipsum dolor sit amet.
            </p>
            <button className="hover:text-black hover:bg-neutral-200 hover:border-solid hover:border hover:border-black bg-neutral-400 text-white text-sm md:text-md mt-6 sm:w-5/12 sm:mt-8 md:h-14 h-10 w-1/3 rounded-md">
              Get Involved
            </button>
          </div>

            {/* <RenderParams className={classes.params} /> */}

          {/* Our impact so far box */}
          <div className="w-5/6 bg-neutral-300 m-auto h-44">
            <div className="p-auto">
              <h1 className="text-center font-normal text-lg sm:text-2xl p-5">
                Our Impact So Far
              </h1>
          
              <div className="flex align-center justify-around w-full">
                <div className="text-center w-1/3">
                  <h1 className="text-md p-2 sm:text-2xl">10,000</h1>
                  <p className="text-xs">Meals Provided</p>
                </div>
                <div className="text-center w-1/3">
                  <h1 className="text-md p-2 sm:text-2xl">1,000</h1>
                  <p className="text-xs">Volunteers</p>
                </div>
                <div className="text-center w-1/3">
                  <h1 className="text-md p-2 sm:text-2xl">
                    $100,000
                  </h1>
                  <p className="text-xs">
                    Raised
                  </p>
                </div>
              </div>
            </div>
            
          </div>

            {/* <RenderParams className={classes.params} /> */}

          {/* Preliminary Gallery */}
          <div className="mt-10 mb-32 w-full">
            <h1 className="text-center text-3xl">Gallery</h1>
            <div className="flex justify-around w-11/12 m-auto mt-10">
              <div className="lg:w-72 md:w-56 sm:w-40 w-24 h-28 sm:h-60 bg-neutral-300"></div>
              <div className="lg:w-72 md:w-56 sm:w-40 w-24 h-28 sm:h-60 bg-neutral-300"></div>
              <div className="lg:w-72 md:w-56 sm:w-40 w-24 h-28 sm:h-60 bg-neutral-300"></div>
            </div>
          </div>

      </div>
      <Footer />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the Home Page",
};

//export default PageTemplate

//export { generateMetadata }
