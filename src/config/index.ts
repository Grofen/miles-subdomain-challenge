export const NODE_ENV = import.meta.env.NODE_ENV || "development";

// Auth0 Variables
export const AUTH0_BASE_URL = import.meta.env.VITE_AUTH0_BASE_URL;
export const AUTH0_CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
export const AUTH0_CLIENT_SECRET = import.meta.env.VITE_AUTH0_CLIENT_SECRET;
export const AUTH0_COOKIE_DOMAIN = import.meta.env.VITE_AUTH0_COOKIE_DOMAIN;
export const AUTH0_ISSUER_BASE_URL = import.meta.env.VITE_AUTH0_ISSUER_BASE_URL;
export const AUTH0_SECRET = import.meta.env.VITE_AUTH0_SECRET;
export const AUTH0_SCOPE =
  "openid profile email read:current_user update:current_user_metadata";
