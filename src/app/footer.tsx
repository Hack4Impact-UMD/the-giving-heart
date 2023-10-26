"use client"

import { usePathname } from "next/navigation";
import personImage from "./_images/person-filled-icon.png"
import Image from "next/image"
import { User } from 'lucide-react';

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
    <div className="w-full content-between px-5 text-white bg-[#860e13]">
      <div className="flex flex-col sm:flex-row justify-around mr-5 mt-5">
        <div className="sm:text-3xl text-3xl font-bold m-4">The Giving Heart</div>

        <div className="m-4 flex flex-col sm:items-center">
          <div className="text-xl underline">Contact Us</div>
          <p className="text-md font-medium sm:pt-1">Info@givingheart.com</p>
          <p className="text-md font-medium sm:pt-1">(302)-532-2922</p>
        </div>

        <div className="m-4 flex flex-col sm:items-center">
        <div className="text-xl sm:text-center underline">Useful Links</div>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                pathname === item.href
                  ? "border-slate-500 "
                  : "border-transparent hover:text-gray-200",
                "inline-flex sm:pt-1 border-b-2 text-md font-medium"
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden sm:visible m-4 md:flex flex-col items-center">
          <div className="hidden sm:flex text-xl underline">
            Socials
          </div>

          <div className="hidden md:visible pt-1 md:flex justify-between items-center space-x-2">
            <User/>
            <User/>
            <User/>
          </div>
        </div>
        
      </div>

      <hr className="text-white mt-8 mb-1" />

      <div className="visible md:hidden flex flex-row justify-between text-xs font-medium mr-5 mb-5 w-full">
        <div className=" pt-1 w-1/2">Privacy Policy | Terms of Use</div>
        <div className=" pt-1 flex justify-end space-x-1 w-1/3">
          <User/>
          <User/>
          <User/>
        </div>
      </div>

      <div className="hidden md:visible md:flex flex-row justify-between text-xs font-medium mr-5 mb-5">
        <div className="pt-1"> The Giving Heart </div>
        <div className="pt-1">Privacy Policy | Terms of Use</div>
      </div>
    </div>
  );
}
