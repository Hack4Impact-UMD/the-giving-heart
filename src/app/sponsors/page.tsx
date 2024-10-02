"use client";

import Image from "../../../node_modules/next/image";

{
  /* Images for Sponsors Section */
}
import APRI from "./Sponsors/APRI.png";
import BH from "./Sponsors/BoarsHead.png";
import Bombas from "./Sponsors/Bombas.png";
import CV from "./Sponsors/ClerviewCounseling.png";
import DE from "./Sponsors/DominionEnergy.png";
import EZB from "./Sponsors/EZBox.png";
import KK from "./Sponsors/KrispyKreme.png";
import ML from "./Sponsors/MassieLaw.png";
import NAACP from "./Sponsors/NAACP.png";
import NPHC from "./Sponsors/NatPanHelllenicCouncil.png";
import Pepsi from "./Sponsors/Pepsi.png";
import RVA from "./Sponsors/RichmondVA.png";
import Sysco from "./Sponsors/Sysco.png";
import Threads from "./Sponsors/Threads.png";
import Ukrops from "./Sponsors/Ukrops.png";
import UH from "./Sponsors/UnitedHeathcare.png";
import UO from "./Sponsors/urban-one-logo 1.png";
import Walmart from "./Sponsors/Walmart.png";
import WB from "./Sponsors/WilliamsBakery.png";

{
  /* Images for Auxillary Supporters Section */
}
import Aramark from "./AuxSupporters/Aramark.png";
import GR from "./AuxSupporters/GreaterRichmondConventionCenter.png";
import Market from "./AuxSupporters/TheMarket25.png";

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

      {/* Sponsors Section */}
      <h2 className="sm:pb-8 pb-2 text-2xl font-semibold mt-10">
        Our Sponsors
      </h2>
      <div className="grid grid-cols-3 gap-4 basis-1/3 text-center w-6/7 lg:w-3/4 ml-10 mr-10 mb-10 place-items-center align-start">
        <Image src={UO} alt="Urban One" />
        <Image src={UH} alt="United Healthcare" />
        <Image src={Sysco} alt="Sysco" />
        <Image src={DE} alt="Dominion Energy" />
        <Image src={Threads} alt="Threads" />
        <Image src={Pepsi} alt="Pepsi" />
        <Image src={Bombas} alt="Bombas" />
        <Image src={KK} alt="Krispy Kreme" />
        <Image src={BH} alt="Boar's Head" />
        <Image src={EZB} alt="E-Z Box" />
        <Image src={WB} alt="Williams Bakery" />
        <Image src={APRI} alt="APRI" />
        <Image src={NAACP} alt="NAACP" />
        <Image src={CV} alt="Clearview Counseling" />
        <Image src={Ukrops} alt="Ukrops" />
        <Image src={NPHC} alt="National Pan-Hellenic Council" />
        <Image src={RVA} alt="Richmond, VA" />
        <div className="flex flex-col justify-center align-center items-center">
          <Image src={Walmart} alt="Walmart" />
          <p className="text-xs text-center">Stores 1969 and 2821</p>
        </div>
        <div />
        <Image src={ML} alt="Massie Law" />
      </div>

      {/* Supporters Section */}
      <h2 className="sm:pb-8 pb-2 text-2xl font-semibold">Supporters</h2>
      <div className="grid grid-cols-3 gap-4 basis-1/3 text-center w-6/7 lg:w-3/4 ml-10 mr-10 mb-10 place-items-center align-start">
        <p className="sm:text-lg text-xs h-full">
          The Honorable Cynthia I. Newbille <br />
          (Councilwoman - 7th District)
        </p>
        <p className="sm:text-lg text-xs h-full">
          Eda H. Cabaniss <br /> Charitable
        </p>
        <p className="sm:text-lg text-xs h-full">
          St. John&apos;s United Church of Christ Richmond, VA
        </p>
        <p className="sm:text-lg text-xs h-full">
          The Honorable Lamont Bagby <br /> (VA. State Senate)
        </p>
        <p className="sm:text-lg text-xs h-full">
          The Honorable Lamont Bagby <br /> (VA. State Senate)
        </p>
        <p className="sm:text-lg text-xs h-full">
          Clovia Lawrence, Margaret Grooms and Family
        </p>
      </div>

      {/* Auxillary Supporters Section */}
      <h2 className="sm:pb-8 pb-2 text-2xl font-semibold">
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
        <Image src={GR} alt="Greater Richmond Convention Center" />
        <Image src={Market} alt="The 25th Market" />
        <Image src={Aramark} alt="Aramark" />
      </div>
    </main>
  );
}
