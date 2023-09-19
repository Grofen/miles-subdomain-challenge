import { useNavigate } from "react-router-dom";
import {
  AppState,
  Auth0Provider,
  Auth0ProviderOptions,
} from "@auth0/auth0-react";

type Props = Pick<
  Auth0ProviderOptions,
  "children" | "domain" | "clientId" | "cookieDomain" | "authorizationParams"
>;

const AuthenticationProvider = ({
  authorizationParams,
  children,
  clientId,
  cookieDomain,
  domain,
}: Props): JSX.Element => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      authorizationParams={authorizationParams}
      clientId={clientId}
      cookieDomain={cookieDomain}
      domain={domain}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthenticationProvider;
