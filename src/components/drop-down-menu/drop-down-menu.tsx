import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import cx from "classnames";
import { Fragment, PropsWithChildren, useState } from "react";
import arrow from "../../images/caret-down-solid.svg";

export interface List {
  name?: string;
  value?: string[];
}

interface Props {
  list: List[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeMenu: (newValue: any[]) => void;
  title: string;
}

export const Menu = ({ list, changeMenu, title }: PropsWithChildren<Props>) => {
  const [selected, setSelected] = useState([list[0]]);
  // fun;
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-[26px] text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="block truncate">
                  {title}: {selected.length > 1 ? "..." : selected[0].name}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <img
                  src={arrow}
                  className="h-3 w-3 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {list.map((_id, item) => (
                  <Listbox.Option
                    key={list[item].name}
                    className={({ active }) =>
                      cx(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9",
                      )
                    }
                    value={list[item].name}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={cx(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate",
                            )}
                          >
                            {list[item].name}
                          </span>
                        </div>

                        {selected
                          ? (setSelected([list[item]]),
                            changeMenu([list[item].value]),
                            (
                              // fun,
                              <span
                                className={cx(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4",
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ))
                          : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Menu;
