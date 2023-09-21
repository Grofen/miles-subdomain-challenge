import { AUTH0_CLIENT_ID, AUTH0_ISSUER_BASE_URL } from "config";
import { Auth0Provider } from "@auth0/auth0-react";
import { MemoryRouter, MemoryRouterProps } from "react-router-dom";
import { PropsWithChildren } from "react";
import { vi } from "vitest";

type Props = PropsWithChildren<MemoryRouterProps>;

vi.mock("@auth0/auth0-react", async () => {
  const actual = await vi.importActual("@auth0/auth0-react");
  return {
    ...(actual as typeof import("@auth0/auth0-react")),
    useAuth0: () => {
      return {
        isAuthenticated: true,
        user: {
          name: "Test User",
          email: "test@mail.com",
          picture: "https://picsum.photos/200",
          sub: "auth0|1234567890",
        },
      };
    },
    Auth0Provider: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  };
});

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
