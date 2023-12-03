"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { User } from "lucide-react";
import { API } from "@/utils/constant";
import Link from "next/link";
const navigation = [
  { name: "Donate", href: "/getinvolved" },
  { name: "Volunteer", href: "/getinvolved" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default async function Footer() {
  const pathname = usePathname();
  const footer_email_phone: string[] = await fetchFooter();

  return (
    <div className="w-full content-between px-5 text-white bg-[#860e13]">
      <div className="flex flex-col sm:flex-row justify-around mr-5 mt-5">
        <p className="w-full sm:w-1/3 text-center sm:text-left sm:text-3xl md:text-4xl text-2xl mt-4 mr-2">
          The Giving Heart ❤
        </p>

        <div className="m-4 flex flex-col sm:items-center">
          <div className="text-xl underline">Contact Us</div>
          <p className="text-md font-medium sm:pt-1">
            <a href={`mailto:${footer_email_phone[0]}`}>
              {footer_email_phone[0]}
            </a>
          </p>
          <p className="text-md font-medium sm:pt-1">{footer_email_phone[1]}</p>
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
          <div className="hidden sm:flex text-xl underline">Socials</div>

          <div className="hidden md:visible pt-1 md:flex justify-between items-center space-x-2">
            <User />
            <User />
            <User />
          </div>
        </div>
      </div>

      <hr className="text-white mt-8 mb-1" />

      <div className="visible md:hidden flex flex-row justify-between text-xs font-medium mr-5 pb-5 w-full">
        <div className=" pt-1 w-1/2">Privacy Policy | Terms of Use</div>
        <div className=" pt-1 flex justify-end space-x-1 w-1/3">
          <User />
          <User />
          <User />
        </div>
      </div>

      <div className="hidden md:visible md:flex flex-row justify-between text-xs font-medium mr-5 pb-8">
        <div className="pt-1"> The Giving Heart </div>
        <div className="pt-1">
          {" "}
          <Link
            href={{
              pathname: `/privacy-policy`,
            }}
          >
            Privacy Policy{" "}
          </Link>
          |
          <Link
            href={{
              pathname: `/terms-of-use`,
            }}
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </div>
  );
}

async function fetchFooter() {
  const email_phone: string[] = [];
  const response = await fetch(`${API}/home-page?populate=footer_email`, {
    cache: "no-store",
  });
  const data = await response.json();
  if (!data.data) {
    return [];
  }
  const footer_email = data.data.attributes.footer_email;
  const footer_phone_number = data.data.attributes.footer_phone_number;
  email_phone.push(footer_email);
  email_phone.push(footer_phone_number);

  return email_phone;
}
