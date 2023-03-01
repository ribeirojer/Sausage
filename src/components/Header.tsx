import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header
      x-data="{ navbarOpen: false }"
      className="flex w-full items-center bg-white"
    >
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="javascript:void(0)" className="block w-full py-5">
              <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                alt="logo"
                className="w-full"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                // @click="navbarOpen = !navbarOpen"
                // :className="navbarOpen && 'navbarTogglerActive' "
                id="navbarToggler"
                className="ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
              >
                <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
                <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
                <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none"
              >
                <ul className="block lg:flex">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Payment
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="javascript:void(0)"
                className="text-dark hover:text-primary py-3 px-7 text-base font-medium"
              >
                Login
              </a>
              <a
                href="javascript:void(0)"
                className="bg-primary rounded-lg py-3 px-7 text-base font-medium text-white hover:bg-opacity-90"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
