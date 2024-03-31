"use client";

import APRI from "./Sponsors/APRI.png"
import BH from "./Sponsors/BoarsHead.png"
import Bombas from "./Sponsors/Bombas.png"
import CV from "./Sponsors/ClerviewCounseling.png.png"
import DE from "./Sponsors/DominionEnergy.png.png"
import EZB from "./Sponsors/EZBox.png.png"
import KK from "./Sponsors/KrispyKreme.png.png"
import ML from "./Sponsors/MassieLaw.png.png"
import NAACP from "./Sponsors/NAACP.png"
import NPHC from "./Sponsors/NatPanHelllenicCouncil.png.png"
import Pepsi from "./Sponsors/Pepsi.png"
import RVA from "./Sponsors/RichmondVA.png.png"
import Sysco from "./Sponsors/Sysco.png.png"
import Threads from "./Sponsors/Threads.png.png"
import Ukrops from "./Sponsors/Ukrops.png"
import UH from "./Sponsors/UnitedHeathcare.png.png"
import UO from "./Sponsors/urban-one-logo 1.png.png"
import Walmart from "./Sponsors/Walmart.png.png"
import WB from "./Sponsors/WilliamsBakery.png.png"

import Aramark from "./AuxSupporters/Aramark.png"
import GR from "./AuxSupporters/GreaterRichmondConventionCenter.png"
import Market from "./AuxSupporters/TheMarket25.png.png"

const supporters = ["The Honorable Cynthia I. Newbille  (Councilwoman - 7th  District)", "Eda H. Cabaniss Charitable", 
                    "St. John's United Church of Christ Richmond, Va.", "The Honorable Lamont Bagby\n(Va. State Senate)",
                    "The Honorable Lamont Bagby\n(Va. State Senate)", "Clovia Lawrence, Margaret Grooms and Family"]

const aux_supporters_text = ["First English Evangelical Lutheran Church","Project Give Back to the Community",  
                            "Urban League of Richmond Young Professionals"]
const aux_supporters_imgs = [
    { image: Aramark, text: "Aramark" },
    { image: GR, text: "Greater Richmond Convention Center" },
    { image: Market, text: "The 25th Market" },
  ]

  const sponsors_imgs = [
    { image: APRI, text: "APRI" },
    { image: BH, text: "Boar's Head" },
    { image: Bombas, text: "Bombas" },
    { image: CV, text: "Clearview Counseling" },
    { image: DE, text: "Dominion Energy" },
    { image: EZB, text: "E-Z Box" },
    { image: KK, text: "Krispy Kreme" },
    { image: ML, text: "Massie Law" },
    { image: NAACP, text: "NAACP" },
    { image: NPHC, text: "National Pan Hellenic Council" },
    { image: Pepsi, text: "Pepsi" },
    { image: RVA, text: "Richmond VA" },
    { image: Sysco, text: "Sysco" },
    { image: Threads, text: "Threads" },
    { image: Ukrops, text: "Ukrops" },
    { image: UH, text: "United Healthcare" },
    { image: UO, text: "Urban One" },
    { image: Walmart, text: "Walmart Stores 1969 & 2821" },
    { image: WB, text: "William's Bakery" },
  ]

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
        <div className="grid grid-cols-3 gap-4">
          
        </div>

      </main>
    );
  };
  