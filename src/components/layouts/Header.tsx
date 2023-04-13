import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

import {
  Button,
  Avatar,
  IconButton,
  Breadcrumbs,
} from "@material-tailwind/react";

import Search from "./Search";

import Logo from "../../assets/images/logo.svg";
import User from "../../assets/images/woman.png";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: User,
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div className="min-h-full shadow">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-[100%] px-4 sm:px-6 lg:px-8 bg-slate-500">
                <div className="flex h-24 items-center justify-between max-w-[90%] mx-auto">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <button>
                        <img
                          className="h-64 w-64"
                          src={Logo}
                          alt="Your Company"
                        />
                      </button>
                    </div>
                  </div>

                  <Search />

                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <IconButton
                        color="white"
                        className="relative ml-5 border border-[#EDEDED] rounded-[15px]"
                      >
                        <BellIcon className="h-8 w-8" aria-hidden="true" />
                      </IconButton>

                      <IconButton
                        color="white"
                        className="relative ml-5 border border-[#EDEDED] rounded-[15px]"
                      >
                        <ShoppingBagIcon
                          className="h-8 w-8"
                          aria-hidden="true"
                        />
                      </IconButton>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-5">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                            <span className="sr-only">Open user menu</span>
                            <Avatar src={User} alt="avatar" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <Button className="normal-case group rounded-2xl bg-[#FF2225] font-bold text-lg text-white relative overflow-hidden ml-4">
                        Get the app
                      </Button>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <div className="h-20 shadow">
        <div className="flex h-20 items-center justify-between mx-auto">
          <Breadcrumbs className="bg-white ml-10 mr-5" separator=">">
            <a href="#" className="opacity-50 ml-5 mr-5 font-bold">
              HOME
            </a>
            <a href="#" className="opacity-100 ml-5 mr-5 font-bold">
              RESTAURANTS
            </a>
            <a href="#" className="opacity-100 ml-5 font-bold">
              CHECKOUT
            </a>
          </Breadcrumbs>
        </div>
      </div>
    </>
  );
}
