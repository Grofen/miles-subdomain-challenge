import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Suspended from "components/shared/suspended";

const Logout = (): JSX.Element => {
  const { logout } = useAuth0();

  useEffect(() => {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  });

  return <Suspended isLoading={true} variant={"viewPort"} />;
};

export default Logout;
