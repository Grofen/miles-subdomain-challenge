import Page from "components/shared/page";
import Home from "../../components/home";

const HomePage = (): JSX.Element => {
  return (
    <Page wrapperClassName="pb-0 pt-0 sm:pt-40 lg:pt-40">
      <Home />
    </Page>
  );
};

export default HomePage;
