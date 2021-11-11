import { Tab } from "@headlessui/react";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
const Tabs = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full h-screen mt-28 ">
        <Tab.Group >
          <Tab.List className="flex gap-5 p-1 space-x-1 rounded-xl ">
            <Tab
              className={({ selected }) =>
                selected
                  ? `bglgreen text-white borderlgreen w-40 md:w-60 py-2 md:py-5 rounded-full font-bold text-base md:text-lg ring md:ring-4 ring-green-800 ring-offset-4  transition ease-in-out duration-300 transform hover:scale-98`
                  : `w-40 md:w-60 rounded-full font-medium py-2 md:py-5 text-base md:text-lg lgreen borderlgreen transition ease-in-out duration-300 transform hover:scale-98`
              }
            >
              Search Institute
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? `bglgreen text-white borderlgreen w-40 md:w-60 py-2 md:py-5 rounded-full font-bold text-base md:text-lg ring md:ring-4 ring-green-800 ring-offset-4 transition ease-in-out duration-300 transform hover:scale-98`
                  : `w-40 md:w-60 rounded-full font-medium py-2 md:py-5 text-base md:text-lg lgreen borderlgreen transition ease-in-out duration-300 transform hover:scale-98`
              }
            >
              Explore Career
            </Tab>
          </Tab.List>
          <Tab.Panels className="w-full">
            <Tab.Panel>
              <TabOne />
            </Tab.Panel>
            <Tab.Panel>
              <TabTwo />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default Tabs;
