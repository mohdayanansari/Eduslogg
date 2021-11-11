import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";
import { ViewGridIcon } from "@heroicons/react/solid";
import { ViewGridIcon as ViewGridOut, CogIcon } from "@heroicons/react/outline";
import Link from "next/link";

function MyLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

const HeaderMobile = () => {
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <>
      <div className="w-full py-[5px] px-[10px] glassmorphism z-10 fixed top-0 flex items-center justify-between shadow-md md:hidden">
        {/* col-1 */}
        <div>
          <Link href="/">
            <img
              src="/edu-Slogg.png"
              alt="logo"
              className="w-[175px] cursor-pointer"
            />
          </Link>
        </div>
        {/* col-2 */}
        <div>
          {/* <Menu>
            <Menu.Button>More</Menu.Button>
            <Menu.Items>
              <Menu.Item>
                <MyLink href="/profile">Profile</MyLink>
              </Menu.Item>
            </Menu.Items>
          </Menu> */}
          <Popover className="">
            {({ open }) => (
              <>
                <Popover.Button ref={setReferenceElement}>
                  {open ? (
                    <ViewGridIcon className="w-10 h-10 lgreen" />
                  ) : (
                    <ViewGridOut className="w-10 h-10 dgreen" />
                  )}
                </Popover.Button>
                {/* <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                > */}
                <Popover.Panel
                  className="z-10 bg-red-400 "
                  ref={setPopperElement}
                  style={styles.popper}
                  {...attributes.popper}
                >
                  <div className="relative w-full phone-menu">
                    <div className="absolute right-0 flex flex-col justify-center gap-2 p-4 mt-4 text-xl bg-white border-2 border-gray-200 divide-y-2 shadow-lg divide-green-50 dgreen rounded-xl w-60 chevron">
                      <Link href="/find-a-institute">Find a Institute</Link>
                      <Link className="pt-2" href="/find-a-job">
                        Find a Job
                      </Link>
                      <Link className="pt-2" href="/careers-portal">
                        Careers Portal
                      </Link>
                      <Link className="pt-2" href="/events">
                        Events
                      </Link>
                      <Link className="pt-2" href="/faq">
                        FAQ
                      </Link>
                      <div className="grid grid-cols-3 pt-3 ">
                        <div>
                          <img
                            src='/img/avatar.png'
                            className="w-10 h-10"
                            alt="avatar"
                          />
                        </div>
                        <div className="flex items-center justify-center">
                          Logout
                        </div>
                        <div className="flex justify-end ">
                          <CogIcon className="w-10 h-10" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <img src="/solutions.jpg" alt="" /> */}
                </Popover.Panel>
                {/* </Transition> */}
              </>
            )}
          </Popover>
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
