import { url } from "inspector";
import Navbar from "../navbar";

export default function GetInvolved() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 min-h-screen">
      <div className="bg-image-bg bg-colors-background z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex justify-between"
      style={{backgroundImage: `url('./getinv.png')`}}>
        <h2>Background Image</h2>
        <h1 className='text-4xl font-sans font-bold dark:text-white'>Get Involved</h1>
        <h2>Background Image</h2>
      </div>

      <div className="flex flex-col">
        <div className='flex flex-col'>
          <h1 className='text-4xl font-bold font-sans dark:text-white'>Volunteer Roles</h1>
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold font-sans dark:text-white'>Donate</h1>
        <p className='font-sans dark:text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br></br>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br></br> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </main>
  );
}
