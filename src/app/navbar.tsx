"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FormItem } from "@/components/ui/form";
import { useAuthContext } from "@/utils/context/AuthContext";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "../../node_modules/next/image";
import logo from "./_images/giving-heart-logo.jpeg";

import { Home } from "lucide-react";
import { HelpCircle } from "lucide-react";
import { HeartHandshake } from "lucide-react";
import { UserCircle2 } from "lucide-react";
import { Settings } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { XCircle } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { CircleEllipsis } from "lucide-react";
import { BookUser } from "lucide-react";
import { X } from "lucide-react";
import { removeToken } from "@/utils/helpers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Get Involved", href: "/getinvolved" },
  { name: "Events", href: "/dashboard" },
  { name: "Waitlist", href: "/waitlist" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Friends of Feast", href: "/friends-of-feast" },
];

const mobileLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Get Involved", href: "/getinvolved" },
  { name: "Events", href: "/dashboard" },
  { name: "Waitlist", href: "/waitlist" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Friends of Feast", href: "/friends-of-feast" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, onClose] = useState(false);
  const { user, setUser } = useAuthContext();
  const [isSlide, OnSlide] = useState(false);
  const mobileIcons = [
    <Home key="home" className="m-auto text-[#ed1c24]" />,
    <HelpCircle key="helpCircle" className="m-auto text-[#ed1c24]" />,
    <HeartHandshake key="heartHandshake" className="m-auto text-[#ed1c24]" />,
    <CalendarDays key="calendar" className="my-auto text-[#ed1c24]" />,
    <CircleEllipsis key="circleEllipsis" className="m-auto text-[#ed1c24]" />,
    <CircleDollarSign
      key="circleDollarSign"
      className="m-auto text-[#ed1c24]"
    />,
    <BookUser key="bookUser" className="m-auto text-[#ed1c24]" />,
  ];
  const toggleMenu = () => {
    onClose(!isOpen);
    OnSlide(!isSlide);
  };

  const handleLogout = () => {
    removeToken();
    setUser(undefined);
    router.push("/");
  };

  return (
    <>
      <div className="-my-px flex space-x-8 bg-white w-full h-20 justify-between">
        <div className="mt-auto mb-auto ml-6">
          <a href="/">
            <Image src={logo} width={70} height={70} alt="Giving heart logo" />
          </a>
        </div>
        <div className="hidden md:block m-auto">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                pathname === item.href
                  ? "text-[#ed1c24] font-bold"
                  : "border-transparent text-black hover:text-[#ed1c24] hover:border-gray-300",
                "inline-flex items-center px-1 pt-1 text-sm font-medium ml-3 mr-3"
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}

          {user ? (
            <div className="inline-flex px-1 pt-1 text-sm font-medium ml-3 mr-8">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="inline-flex align-center mr-2 lucide lucide-circle-user-round"
                  >
                    <path d="M18 20a6 6 0 0 0-12 0" />
                    <circle cx="12" cy="10" r="4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  {user?.firstName}&apos;s Profile
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <a href="/settings">
                      <Settings className="inline-flex mr-2 text-[#ed1c24]" />
                      Settings
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="/dashboard">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="inline-flex align-center text-[#ed1c24] mr-2 lucide lucide-calendar-days"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="4"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                        <path d="M8 14h.01" />
                        <path d="M12 14h.01" />
                        <path d="M16 14h.01" />
                        <path d="M8 18h.01" />
                        <path d="M12 18h.01" />
                        <path d="M16 18h.01" />
                      </svg>
                      Event Management
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <button
                      onClick={handleLogout}
                      className={classNames(
                        pathname === "/sign-in"
                          ? "text-[#ed1c24] font-bold"
                          : "border-transparent text-black hover:text-[#ed1c24] hover:border-gray-300"
                      )}
                      aria-current={
                        pathname === "/sign-in" ? "page" : undefined
                      }
                    >
                      <XCircle className="inline-flex mr-2 text-[#ed1c24]" />
                      Logout
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <a
              key="Sign up/Log in"
              href="/sign-in"
              className={classNames(
                pathname === "/sign-in"
                  ? "text-[#ed1c24] font-bold"
                  : "border-transparent text-black hover:text-[#ed1c24] hover:border-gray-300",
                "inline-flex items-center px-1 pt-1 text-sm font-medium ml-3 mr-3"
              )}
              aria-current={pathname === "/sign-in" ? "page" : undefined}
            >
              Sign Up/Log In
            </a>
          )}
        </div>
        <div
          className="md:hidden w-20 flex h-8 flex-col justify-between m-auto hover:cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="w-1/2 h-1 bg-[#ed1c24]"></div>
          <div className="w-1/2 h-1 bg-[#ed1c24]"></div>
          <div className="w-1/2 h-1 bg-[#ed1c24]"></div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white z-40 shadow-lg p-6 transform duration-300 ease-in ${
          isSlide ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-10 w-full flex flex-row-reverse">
          <X
            className="hover:cursor-pointer text-gray-400"
            onClick={toggleMenu}
          />
        </div>
        <div className="flex-col h-1/3 justify-between ">
          {mobileLinks.map((item, index) => (
            <div key={item.name} className="flex">
              {mobileIcons[index]}
              <a
                href={item.href}
                className={classNames(
                  pathname === item.href
                    ? " text-gray-500 hover:text-[#ed1c24]"
                    : " text-gray-500 hover:text-[#ed1c24]",
                  "inline-flex w-full p-3"
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </a>
            </div>
          ))}
          {user ? (
            <div className="flex">
              <UserCircle2 className="text-[#ed1c24] mx-auto mt-4" />
              <Accordion type="single" collapsible className="w-full px-3">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-gray-500">
                    {user.firstName}&apos;s Profile
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-md">
                    <div className="flex">
                      <Settings className="my-auto mr-2 text-[#ed1c24]" />{" "}
                      <a
                        className="text-gray-500 hover:text-[#ed1c24] hover:cursor-pointer"
                        href="/settings"
                      >
                        Settings
                      </a>
                    </div>
                  </AccordionContent>
                  <AccordionContent className="text-gray-500 text-md">
                    <div className="flex">
                      <XCircle className="my-auto mr-2 text-[#ed1c24]" />{" "}
                      <a
                        className="text-gray-500 hover:text-[#ed1c24] hover:cursor-pointer"
                        onClick={() => {
                          toggleMenu();
                          handleLogout();
                        }}
                      >
                        Logout
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ) : (
            <div key="Sign Up/Log In" className="flex">
              {mobileIcons[3]}
              <a
                href={"/sign-in"}
                className={classNames(
                  pathname === "/sign-in"
                    ? " text-gray-500 hover:text-[#ed1c24]"
                    : " text-gray-500 hover:text-[#ed1c24]",
                  "inline-flex w-full p-3"
                )}
                aria-current={pathname === "/sign-in" ? "page" : undefined}
              >
                Sign Up/Log In
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
