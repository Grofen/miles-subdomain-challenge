import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import AuthenticationProvider from "./providers/authentication/index.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

import {
  AUTH0_CLIENT_ID,
  AUTH0_COOKIE_DOMAIN,
  AUTH0_ISSUER_BASE_URL,
} from "./config/index.ts";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationProvider
        clientId={AUTH0_CLIENT_ID}
        cookieDomain={AUTH0_COOKIE_DOMAIN}
        domain={AUTH0_ISSUER_BASE_URL}
      >
        <App />
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
