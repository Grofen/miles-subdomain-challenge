import { ComponentType } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Suspended from "../components/shared/suspended";

type Props = {
  component: ComponentType;
};

const AuthGuard = ({ component }: Props): JSX.Element => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Suspended isLoading={true} variant={"viewPort"} />,
  });

  return <Component />;
};

export default AuthGuard;
