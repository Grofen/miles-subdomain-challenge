import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { User } from "@auth0/auth0-react";
import Button from "../button";
import { Fragment } from "react";

interface Props {
  user: User;
  logoutHandler: () => void;
}

const UserDropdown = ({ user, logoutHandler }: Props): JSX.Element => {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <img
            alt={user.name}
            className="h-12 w-12 rounded-full"
            src={user.picture}
          />
          <ChevronDownIcon
            aria-hidden="true"
            className="ml-2 -mr-1 h-3 w-3 text-violet-200 hover:text-violet-100"
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-2 px-4">
              <Menu.Item>
                <Button onClick={() => logoutHandler()}>
                  <div className="text-sm font-semibold leading-6 text-white">
                    Logout
                    <span aria-hidden="true">&rarr;</span>
                  </div>
                </Button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserDropdown;
