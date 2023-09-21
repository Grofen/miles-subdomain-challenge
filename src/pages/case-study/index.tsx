import Button from "components/shared/button";
import Container from "components/shared/container";
import ContentTile from "components/shared/content-title";
import Page from "components/shared/page";

import allowedUrls from "images/allowed-urls.png";
import customForms from "images/custom-forms.png";
import authenticationProvider from "images/authentication-provider.png";

const CaseStudyPage = (): JSX.Element => {
  return (
    <Page>
      <div className="min-h-screen">
        <Container>
          <h1 className="text-3xl font-bold mb-4">
            CASE STUDY - Single Authentication for Subdomains
          </h1>

          <ContentTile>
            <h2 className="text-2xl font-semibold mb-4">Motivation</h2>
            <p>
              The objective of this project is to develop a suite of separate
              Single Page Applications, each residing on a subdomain of a common
              parent domain{" "}
              <span className="font-bold">
                <Button className="px-2" href="https://d1.mghorab.com" invert>
                  d1.mghorab.com
                </Button>
              </span>{" "}
              and{" "}
              <span className="font-bold">
                <Button className="px-2" href="https://d2.mghorab.com" invert>
                  d2.mghorab.com
                </Button>
              </span>
              .
            </p>
          </ContentTile>

          <ContentTile>
            <h2 className="text-2xl font-semibold mb-4">Acceptance Criteria</h2>
            <ul className="list-disc list-inside">
              <li>
                Eliminate the need for customers to sign in separately for each
                application.
              </li>
              <li>
                Enable users to sign in once to any of the applications and
                remain authenticated when accessing other apps.
              </li>
              <li>
                Implement a single sign-out mechanism where signing out of one
                app also logs the user out of others.
              </li>
            </ul>
          </ContentTile>

          <ContentTile>
            <h2 className="text-2xl font-semibold mb-4">
              Technologies, Frameworks, and Tools Used
            </h2>
            <ul className="list-disc list-inside">
              <li>Vite + React / TypeScript</li>
              <li>Auth0</li>
              <li>React Router</li>
              <li>TailwindCSS</li>
              <li>Vitest + Jest</li>
            </ul>
          </ContentTile>

          <ContentTile className="flex gap-6 flex-col mt-4">
            <h1 className="text-3xl font-bold mb-4">Project Kickoff</h1>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold">Configuration of Auth0</h2>
              <p>
                I began the project by configuring Auth0 following their
                documentation. Here's an overview of the steps I took:
              </p>
              <ol className="list-decimal list-inside pl-4 mt-4 text-gray-700">
                <li>Initiated a new React application.</li>
                <li>
                  Set up the application URIs, allowing Callback, Logout, and
                  Web origins URLs. These included:
                  <ul className="list-disc list-inside pl-4 mt-2">
                    <li>
                      <code>http://127.0.0.1:5173</code>
                    </li>
                    <li>
                      <code>https://*.mghorab.com</code>
                    </li>
                  </ul>
                </li>
                <li>
                  Customized the login/sign-up form to align with the desired
                  theme.
                </li>
              </ol>
              <div className="lg:flex lg:gap-4">
                <img src={allowedUrls} alt="Allowed URLs" className="lg:w-64" />
                <img src={customForms} alt="Allowed URLs" className="lg:h-64" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold">
                Setting Up Vite Project
              </h2>
              <p>
                With Auth0 configured, I proceeded to create a new Vite project,
                selecting React and TypeScript. After establishing the basic
                configurations, I installed the required packages, including the
                Auth0 React SDK, which provides methods and variables to
                facilitate Auth0 integration.
              </p>
              <p>
                I also created an <code>AuthenticationProvider</code> that wraps
                the <code>App</code> component. Within this provider, I imported{" "}
                <code>Auth0Provider</code> and passed the necessary props. One
                crucial prop for this project was <code>cookieDomain</code>,
                which I discovered through research in the Auth0 documentation
                and community.
                <a
                  className="block mt-3 text-sm text-blue-600 hover:underline font-semibold visited:text-blue-800"
                  href="https://auth0.github.io/nextjs-auth0/types/config.ConfigParameters.html#:~:text=See%20autoSave.-,AUTH0_COOKIE_DOMAIN,-%3A%20See%20domain."
                >
                  https://auth0.github.io/nextjs-auth0/types/config.ConfigParameters.html
                </a>
                <a
                  className="block mt-3 text-sm text-blue-600 hover:underline font-semibold visited:text-blue-800"
                  href="https://community.auth0.com/t/how-to-login-once-across-multiple-subdomains-on-a-custom-domain/78614/1"
                >
                  https://community.auth0.com/t/how-to-login-once-across-multiple-subdomains-on-a-custom-domain/78614/1
                </a>
              </p>

              <div className="lg:flex lg:gap-4">
                <img src={authenticationProvider} alt="Allowed URLs" />
              </div>

              <ul className="list-disc list-inside pl-4">
                <li>Created a new Vite project.</li>
                <li>Selected React and TypeScript as the stack.</li>
                <li>Established basic configurations for the Vite project.</li>
                <li>
                  Installed necessary packages and the Auth0 React SDK, which
                  provides methods and variables for Auth0 integration.
                </li>
                <li>
                  Created an AuthenticationProvider to wrap the App component.
                </li>
                <li>
                  Imported Auth0Provider within the provider and passed
                  necessary props, including cookieDomain.
                </li>
                <li>
                  Discovered the importance of cookieDomain through research
                  here and this in the Auth0 Community.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold">
                Implementing Routing and Authentication
              </h2>
              <p>
                Once Auth0 was properly configured, I can focus on implementing
                routing and authentication. Here are the steps I took:
                <ul className="list-disc list-inside pl-4">
                  <li>
                    Installed <code>react-router</code> to manage routing.
                  </li>
                  <li>
                    Created a routes directory within the app to contain
                    <code>auth-guard</code>, <code>RoutesTable</code>, and{" "}
                    <code>paths</code>.
                  </li>
                  <li>
                    Implemented the <code>AuthGuard</code>, using the
                    <code>withAuthenticationRequired</code> function to restrict
                    access to routes for logged-in users.
                  </li>
                  <li>
                    <code>RoutesTable</code> to define all available routes in
                    the app, with some utilizing the <code>AuthGuard</code>.
                  </li>
                </ul>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold">
                Setting Up Testing: Vite + React Testing Library
              </h2>
              <p>
                For testing purposes, I installed <code>vitest</code>,{" "}
                <code>jsdom</code>, and <code>react-testing-library</code>. I
                configured these packages and created a test setup file with
                default configurations. Additionally, I updated{" "}
                <code>vite.config.ts</code> with the following lines:
              </p>
            </div>
            <pre className="bg-gray-200 p-2 rounded-lg mt-2">
              <code>
                test: &#123;
                <br />
                &nbsp;&nbsp;globals: true,
                <br />
                &nbsp;&nbsp;environment: "jsdom",
                <br />
                &nbsp;&nbsp;include: ["src/**/*.test.tsx"],
                <br />
                &nbsp;&nbsp;setupFiles: "./vitest-setup.ts",
                <br />
                &#125;
              </code>
            </pre>

            <p>
              With protected routes in place, I proceeded to add components that
              would contain the app's content. I also wrote unit tests for the
              home page and profile page.
            </p>

            <p>
              To prepare for deployment, I established a Git repository for the
              app. I ensured that it was ready for deployment to Vercel.
            </p>
            <p>
              On Vercel, I created two separate projects, each with its
              subdomain linked to it. After deploying both apps, I thoroughly
              tested them to ensure their functionality.
            </p>
          </ContentTile>

          <ContentTile>
            <h2 className="text-2xl font-semibold mb-4">Challenges Faced</h2>
            <p>Throughout the project, several challenges were encountered:</p>
            <ol className="list-decimal list-inside ml-4">
              <li className="my-3">
                <strong>Cross-Subdomain Authentication:</strong>
                <p>
                  Ensuring that users stay authenticated while moving across
                  subdomains posed a notable challenge because of security
                  constraints related to cookies.
                </p>
              </li>
            </ol>
          </ContentTile>

          <ContentTile>
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-4">
                Overcoming Challenges
              </h2>
              <p>
                <strong>Cross-Subdomain Authentication:</strong>
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  <strong>Cookie Domain Configuration:</strong> To overcome this
                  challenge, adjustments were made to the cookie configurations.
                  The <code>cookieDomain</code> property was configured
                  appropriately, enabling cookies to be valid across all
                  subdomains. This configuration ensured the sharing of the
                  authentication cookie.
                </li>
              </ul>
            </div>
          </ContentTile>
        </Container>
      </div>
    </Page>
  );
};

export default CaseStudyPage;
