import { useAuth0 } from "@auth0/auth0-react";

import { ReactComponent as MilesLogo } from "../../../images/miles-logo.svg";

import Button from "../button";
import UserDropdown from "./user-dropdown";

const Navbar = () => {
  const { user, logout, isLoading } = useAuth0();

  const logoutHandler = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <header className="fixed w-full top-0 right-0 bg-black z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Button href="/">
            <div className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <MilesLogo className="w-auto text-white" />
            </div>
          </Button>
        </div>
        <div className="flex flex-1 justify-end">
          {user && !isLoading && (
            <UserDropdown user={user} logoutHandler={logoutHandler} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
