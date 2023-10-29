"use client"

import { usePathname } from "next/navigation";

const navigation = [
  { name: "Donate", href: "/getinvolved" },
  { name: "Volunteer", href: "/getinvolved" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-gray-200 content-between divide-y divide-solid divide-black px-5">
      <div className="flex flex-col sm:flex-row justify-around m-5">
        <div className="sm:text-3xl text-xl font-bold m-4">The Giving Heart</div>

        <div className="m-4 flex flex-col sm:items-center">
          <div className="text-md font-bold">Contact Us</div>
          <p className="text-sm font-medium sm:pt-1">Info@givingheart.com</p>
          <p className="text-sm font-medium sm:pt-1">(302)-532-2922</p>
        </div>

        <div className="m-4 flex flex-col sm:items-center">
        <div className="text-md font-bold sm:text-center">Useful Links</div>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                pathname === item.href
                  ? "border-slate-500 text-gray-900"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                "inline-flex sm:pt-1 border-b-2 text-sm font-medium"
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="collapse sm:visible m-4 flex flex-col items-center">
          <div className="hidden sm:flex text-md font-bold">
            Socials
          </div>

          <div className="collapse sm:visible pt-1 flex justify-between items-center space-x-2">
            <img src="" alt="S1" />
            <img src="" alt="S2" />
            <img src="" alt="S3" />
          </div>
        </div>
      </div>

      <div className="visible sm:collapse flex flex-row justify-between text-xs font-medium mx-5 my-2">
        <div className="mx-2 pt-1">Privacy Policy | Terms of Use</div>
        <div className="mx-2 pt-1 flex flex-row space-x-1">
          <img src="" alt="S1" />
          <img src="" alt="S2" />
          <img src="" alt="S3" />
        </div>
      </div>

      <div className="collapse sm:visible flex flex-row justify-between text-xs font-medium mx-5 my-2">
        <div className="pt-1"> The Giving Heart </div>
        <div className="pt-1">Privacy Policy | Terms of Use</div>
      </div>
    </div>
  );
}
