import Container from "components/shared/container";
import ContentTile from "components/shared/content-title";
import Page from "components/shared/page";

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
              Single Page Applications (SPAs), each residing on a subdomain of a
              common parent domain (e.g., app1.miles.com and app2.miles.com).
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

          <div className="bg-white p-6 rounded-lg shadow-md mt-4">
            <h2 className="text-2xl font-semibold mb-4">
              Design and Implementation Approach
            </h2>
            <p>
              <strong>Project Structure:</strong> The project structure was
              organized as follows:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                components: Contains both pages-related and shared components.
              </li>
              <li>hooks: Includes custom hooks for various functionalities.</li>
              <li>
                Images: Stores icons and images used throughout the
                applications.
              </li>
              <li>pages: Houses top-level components for each page.</li>
              <li>
                providers: Manages context providers for state management.
              </li>
              <li>routes: Contains route configurations and utilities.</li>
              <li>
                types: Defines TypeScript types used throughout the application.
              </li>
              <li>test-utils: Provides utilities for testing purposes.</li>
            </ul>

            <p>
              <strong>Authentication Service:</strong> A shared authentication
              service was created using Auth0. This service handled user
              authentication, session management, and provided endpoints for
              login, logout, and user information retrieval.
            </p>

            <p>
              <strong>React Components:</strong> Dedicated React components were
              designed for login, logout, and user profile functionalities.
              These components were designed for easy integration into any SPA
              within the MILES suite.
            </p>

            <p>
              <strong>Routing:</strong> React Router was employed for managing
              routing between different SPAs. Each SPA was configured to load
              shared authentication components on specific routes.
            </p>

            <p>
              <strong>Configuration Management:</strong> Auth0 configurations
              were securely stored in environment variables to safeguard
              sensitive information. This approach ensured that configurations
              were consistent and easy to update across all applications.
            </p>

            <p>
              <strong>State Management:</strong> React's built-in state
              management was utilized to manage user authentication state. A
              global state stored user information, enabling seamless Single
              Sign-On functionality across all SPAs.
            </p>

            <p>
              <strong>Testing:</strong> Unit tests were implemented using Vitest
              and Jest to guarantee the reliability of components and the
              authentication service.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-4">
            <h2 className="text-2xl font-semibold mb-4">Challenges Faced</h2>
            <p>Throughout the project, several challenges were encountered:</p>
            <ol className="list-decimal list-inside ml-4">
              <li>
                <strong>Cross-Subdomain Authentication:</strong> Enabling users
                to remain signed in when navigating between subdomains posed a
                significant challenge due to security restrictions on cookies.
              </li>
              <li>
                <strong>Configuration Management:</strong> Managing distinct
                configurations for each SPA while keeping them synchronized with
                the authentication service proved to be complex.
              </li>
              <li>
                <strong>Testing Single Sign-On:</strong> Testing SSO
                functionality across subdomains necessitated the setup of
                multiple development environments and configurations.
              </li>
            </ol>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-4">
            <h2 className="text-2xl font-semibold mb-4">
              Overcoming Challenges
            </h2>
            <p>
              <strong>Cross-Subdomain Authentication:</strong>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Cookie Domain Configuration:</strong> To address this
                challenge, cookie configurations were adjusted to allow them to
                be valid across all subdomains. This was achieved by setting the
                domain attribute appropriately, ensuring the authentication
                cookie was shared.
              </li>
            </ul>

            <p>
              <strong>Configuration Management:</strong>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Central Configuration File:</strong> A central
                configuration file was introduced to consolidate all necessary
                configuration settings for each SPA and the authentication
                service. This approach enhanced consistency and simplified
                updates.
              </li>
            </ul>

            <p>
              <strong>Testing Single Sign-On:</strong>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Local Development Environments:</strong> Multiple local
                development environments were established to mimic different
                subdomains, enabling thorough testing of SSO functionality.
              </li>
              <li>
                <strong>Configuration Scripts:</strong> Automated scripts were
                developed to streamline the setup of development environments
                with the correct configurations for each SPA, easing the testing
                process.
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </Page>
  );
};

export default CaseStudyPage;
