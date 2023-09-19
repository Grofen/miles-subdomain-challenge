import { PropsWithChildren, ReactNode } from "react";
import { MemoryRouter, MemoryRouterProps } from "react-router-dom";
import { AUTH0_CLIENT_ID, AUTH0_ISSUER_BASE_URL } from "config";
import { vitest } from "vitest";
import { Auth0Provider } from "@auth0/auth0-react";

type Props = PropsWithChildren<MemoryRouterProps>;

vitest.mock("@auth0/auth0-react", () => ({
  Auth0Provider: ({ children }: { children: ReactNode }) => (
    <div>{children}</div>
  ),
}));

const ComponentTestHarness = ({
  children,
  initialEntries,
  initialIndex,
}: Props): JSX.Element => {
  return (
    <MemoryRouter initialEntries={initialEntries} initialIndex={initialIndex}>
      <Auth0Provider clientId={AUTH0_CLIENT_ID} domain={AUTH0_ISSUER_BASE_URL}>
        {children}
      </Auth0Provider>
    </MemoryRouter>
  );
};
export default ComponentTestHarness;
