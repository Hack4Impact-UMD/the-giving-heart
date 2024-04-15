"use client";

import Image from "../../../node_modules/next/image";

{/* Images for Sponsors Section */}
import APRI from "./Sponsors/APRI.png"
import BH from "./Sponsors/BoarsHead.png"
import Bombas from "./Sponsors/Bombas.png"
import CV from "./Sponsors/ClerviewCounseling.png"
import DE from "./Sponsors/DominionEnergy.png"
import EZB from "./Sponsors/EZBox.png"
import KK from "./Sponsors/KrispyKreme.png"
import ML from "./Sponsors/MassieLaw.png"
import NAACP from "./Sponsors/NAACP.png"
import NPHC from "./Sponsors/NatPanHelllenicCouncil.png"
import Pepsi from "./Sponsors/Pepsi.png"
import RVA from "./Sponsors/RichmondVA.png"
import Sysco from "./Sponsors/Sysco.png"
import Threads from "./Sponsors/Threads.png"
import Ukrops from "./Sponsors/Ukrops.png"
import UH from "./Sponsors/UnitedHeathcare.png"
import UO from "./Sponsors/urban-one-logo 1.png"
import Walmart from "./Sponsors/Walmart.png"
import WB from "./Sponsors/WilliamsBakery.png"

{/* Images for Auxillary Supporters Section */}
import Aramark from "./AuxSupporters/Aramark.png"
import GR from "./AuxSupporters/GreaterRichmondConventionCenter.png"
import Market from "./AuxSupporters/TheMarket25.png"

import SponsorImages from "./SponsorImages"
import AuxSponsImages from "./AuxSponsImages"

export default function OurSponsors() {
  
  
    return (
      <main className="flex min-h-screen flex-col items-center">
        <div
        className="flex items-center justify-center md:p-16 p-2 pt-16 overflow-hidden"
        style={{
            // TODO: get better header image, current one is very pixelated 
          backgroundImage:
            "url(../_images/friends-of-the-feast.png), linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: "40vh",
          position: "relative",
        }}
      >
        <div>
          <h2 className="text-5xl font-semibold leading-33 tracking-normal text-center text-white">
            Our Sponsors and Supporters
          </h2>
        </div>
      </div>


      <div className="flex-col align-center text-center justify-center w-5/6 lg:w-2/3 m-auto mt-10 mb-10 md:p-10 p-4">
        <p className="lg:pr-24 lg:pl-24 sm:text-lg text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim 
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
        </p>
        <br/>
        <p className="lg:pr-24 lg:pl-24 sm:text-lg text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad 
          minim veniam,
        </p>
        <br/>
        </div>

        {/* Sponsors Section */}
        <h2 className="sm:pb-8 pb-2 text-xl font-semibold">
            Our Sponsors
        </h2>
        <div>
        <SponsorImages/>
        </div>
        {/* Supporters Section */}
        <h2 className="sm:pb-8 pb-2 text-xl font-semibold">
            Supporters
        </h2>
        <div className="grid grid-cols-3 gap-4 basis-1/3 text-center w-6/7 lg:w-3/4 ml-10 mr-10 mb-10 place-items-center align-start">
          <p className="sm:text-lg text-xs h-full">
            The Honorable Cynthia I. Newbille <br/>(Councilwoman - 7th District)
          </p>
          <p className="sm:text-lg text-xs h-full">
            Eda H. Cabaniss <br/> Charitable
          </p>
          <p className="sm:text-lg text-xs h-full">
            St. John&apos;s United Church of Christ Richmond, VA
          </p>
          <p className="sm:text-lg text-xs h-full">
            The Honorable Lamont Bagby <br/> (VA. State Senate)
          </p>
          <p className="sm:text-lg text-xs h-full">
            The Honorable Lamont Bagby <br/> (VA. State Senate)
          </p>
          <p className="sm:text-lg text-xs h-full">
            Clovia Lawrence, Margaret Grooms and Family
          </p>
        </div>

        {/* Auxillary Supporters Section */}
        <h2 className="sm:pb-8 pb-2 text-xl font-semibold">
            Auxillary Supporters
        </h2>
        <div className="grid grid-cols-3 gap-4 basis-1/3 text-center w-6/7 lg:w-3/4 ml-10 mr-10 mb-10 place-items-center">
          <p className="sm:text-lg text-xs h-full">
            First English Evangelical Lutheran Church
          </p>
          <p className="sm:text-lg text-xs h-full">
            Project Give Back to the Community
          </p>
          <p className="sm:text-lg text-xs h-full">
            Urban League of Richmond Young Professionals
          </p>
          <AuxSponsImages/>
        </div>

      </main>
    );
  };
  
  