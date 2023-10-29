import Navbar from "../navbar";

export default function GetInvolved() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 min-h-screen">
      <div className="bg-colors-background z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex justify-between">
        <h2>Background Image</h2>
        <h1 className='text-4xl font-bold dark:text-white'>Get Involved</h1>
        <h2>Background Image</h2>
      </div>
      <div className="flex flex-col">
        <div className='flex flex-col'>
          <h1 className='text-4xl font-bold dark:text-white'>Volunteer Roles</h1>
        </div>
      </div>
    </main>
  );
}
