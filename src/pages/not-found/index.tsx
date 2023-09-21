import Page from "components/shared/page";

const NotFound = (): JSX.Element => {
  return (
    <Page>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
        <p className="text-gray-600">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </Page>
  );
};

export default NotFound;
