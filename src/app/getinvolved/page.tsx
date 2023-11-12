import { url } from "inspector";
import Navbar from "../navbar";
import EventHelper from "./eventhelper";

export default function GetInvolved() {
  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-24">
      <div className="flex items-center justify-center bg-cover h-full w-full align-middle font-sans"
      style={{backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/3d9f/533e/7b3a91405e9b8b8200346a425beddb5c?Expires=1699833600&Signature=CAQ~y66LwWD0Miw5F2WC34bEt7cTvh~TVP1iM4pB~qWKfLu~F5Akx9av3gDvT49X3GxzNCHV8KoqqN1LzShcVKv7MlJqKWKsSMEQTwaVnYQelkRD2Gnb4gBcvzL0BaI2dbIE4DubzIlzBTCkDdhIJkooVK0LA17wJqaqsqMpe3V7ybScLTAm0zHFQ5Zmy2g6Izl6bO2oElojErYvtnpgjkhYgqTqxT3FW9NFey0Nsx36O5ovanbacL5Z3-SlwxN3Vgm5wRCm9Uq7iE2BwvlWM0ossQK1gFTiKqEdvji~w1s-a~YWBjIWG-2r-G0cijDldpIIm4hrt9qSGTSW76vWkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '200vh',
              height: '40vh'}}>
        <div>
          <h1 className='text-5xl font-sans font-bold text-white'>Get Involved</h1>
        </div>
      </div>

      <div className="flex flex-col">
        <div className='flex flex-col'>
          <h1 className='text-4xl font-bold font-sans dark:text-white'>Volunteer Roles</h1>
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <div><EventHelper/></div>
        <h1 className='text-4xl font-bold font-sans dark:text-white'>Donate</h1>
        <p className='font-sans dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br></br> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </main>
  );
}
