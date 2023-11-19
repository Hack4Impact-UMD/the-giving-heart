"use client";

import { FormItem } from "@/components/ui/form";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navigation = [
  { name: "About Us", href: "/about" },
  { name: "Get Involved", href: "/dashboard" },
  // { name: "Sign up/Log in", href: "/sign-in" },
];
const mobileLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Get Involved", href: "/dashboard" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, onClose] = useState(false);

  const toggleMenu = () => {
    onClose(!isOpen);
  };
  return (
    <>
      <div className="-my-px flex space-x-8 bg-neutral-300 w-full h-20 justify-between">
        <div className="mt-auto mb-auto ml-6">
          <a href="/">
            <h1 className=" text-black font-semibold text-lg">
              The Giving Heart
            </h1>
          </a>
        </div>
        <div className="hidden md:block m-auto">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                pathname === item.href
                  ? "border-slate-500 text-black bg-neutral-500"
                  : "border-transparent text-black hover:text-gray-500 hover:border-gray-300",
                "inline-flex items-center px-1 pt-1 text-sm font-medium ml-3 mr-3"
              )}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div
          className="md:hidden w-20 flex h-8 flex-col justify-between m-auto"
          onClick={toggleMenu}
        >
          <div className="w-1/2 h-1 bg-gray-800"></div>
          <div className="w-1/2 h-1 bg-gray-800"></div>
          <div className="w-1/2 h-1 bg-gray-800"></div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-lg p-6`}
        >
          <button
            className="text-3xl font-extralight block mb-10 text-gray-800"
            onClick={toggleMenu}
          >
            X
          </button>
          <div className="flex-col h-1/3 justify-between ">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  pathname === item.href
                    ? " text-black hover:text-gray-500 "
                    : " text-black hover:text-gray-500",
                  "inline-flex w-full p-3"
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
