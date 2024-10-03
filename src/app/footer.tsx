"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Facebook, Instagram, Twitter, User } from "lucide-react";
import { API } from "@/utils/constant";
import Link from "next/link";
import useSWR from "swr";
const navigation = [
  { name: "Donate", href: "/getinvolved" },
  { name: "Volunteer", href: "/getinvolved" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const fetcher = async (url: string) => {
  const response = await fetch(url, { cache: "no-store" });
  const data = await response.json();
  if (!data.data) {
    return [];
  }
  const footer_email = data.data.attributes.footer_email;
  const footer_phone_number = data.data.attributes.footer_phone_number;
  const footer_hours = data.data.attributes.footer_hours;
  return [footer_email, footer_phone_number, footer_hours];
};

// TODO: Consider migrating to a server-side rendered component
export default function Footer() {
  const pathname = usePathname();
  const { data: footerData, error } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/home-page?populate=footer_email`,
    fetcher
  );

  if (error) {
    console.error("Error fetching footer data:", error);
  }

  return (
    <div className="w-full content-between px-5 text-white bg-[#860e13]">
      <div className="flex flex-col sm:flex-row justify-around mr-5 pt-5">
        <div className="m-4 flex flex-col sm:items-center">
          <p className="w-full text-center sm:text-left sm:text-3xl md:text-4xl text-2xl">
            The Giving Heart
          </p>
          <p className="text-md font-medium sm:pt-1">
            {footerData ? <a>{footerData[2]}</a> : <a>Loading...</a>}
          </p>
          <p>9 am to 5 pm, Monday through Friday</p>
        </div>

        <div className="m-4 flex flex-col sm:items-center">
          <div className="text-xl underline">Contact Us</div>
          <p className="text-md font-medium sm:pt-1">
            {footerData ? (
              <a href={`mailto:${footerData[0]}`}>{footerData[0]}</a>
            ) : (
              <a>Loading...</a>
            )}
          </p>
          {footerData ? (
            <p className="text-md font-medium sm:pt-1">{footerData[1]}</p>
          ) : (
            <a>Loading...</a>
          )}
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
            <a
              href="https://www.instagram.com/thegivingheartrva/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
            <Facebook />
            <Twitter />
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
