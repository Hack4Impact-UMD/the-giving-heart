"use client";

import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "About", href: "/about" },
  { name: "Get Involved", href: "/getinvolved" },
  { name: "Sign In/Sign Up", href: "/signin" },
  { name: "Register Event", href: "/registerevent" },
  { name: "Example Strapi", href: "/example" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              pathname === item.href
                ? "border-slate-500 text-gray-900"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
              "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            )}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
}
