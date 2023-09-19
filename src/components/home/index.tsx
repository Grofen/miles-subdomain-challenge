import useSubdomainName from "../../hooks/use-subdomain-name";

import Button from "../shared/button";
import HeroOverlay from "./hero-overlay";
import ImageSection from "./image-section";

const Home = (): JSX.Element => {
  const { name: subdomainName, githubLink } = useSubdomainName();

  return (
    <div className="relative isolate">
      <HeroOverlay />
      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                <span>Subdomain {subdomainName}</span>
              </h1>
              <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                You can find the code for this project on GitHub.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button
                  href={githubLink}
                  className="justify-center"
                  target="_blank"
                >
                  To GitHub <span aria-hidden="true">&rarr;</span>
                </Button>
              </div>
            </div>
            <ImageSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
