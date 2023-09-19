import { ReactNode } from "react";

import Button from "../button";
import ContentTile from "../content-title";

type Props = {
  code: number;
  description: ReactNode;
  instructions: ReactNode;
  title: ReactNode;
};

const ErrorView = ({
  code,
  description,
  instructions,
  title,
}: Props): JSX.Element => (
  <ContentTile className="py-6 px-4 max-w-[700px]">
    <h1 className={"styles.title"}>{title}</h1>
    <h2 className={"styles.description"}>{description}</h2>
    <p className={"styles.instructions"}>{instructions}</p>
    <p>Error {code}</p>
  </ContentTile>
);

export const NotFoundError = (): JSX.Element => (
  <ErrorView
    code={404}
    description="We can't seem to find the page you are looking for."
    instructions={
      <>
        Try refreshing this page or return to <Button href="/">homepage</Button>
        .
      </>
    }
    title="Uh Oh"
  />
);

export const UnexpectedError = (): JSX.Element => (
  <ErrorView
    code={500}
    description="We're having trouble displaying this page at the moment."
    instructions="Please wait and try refreshing this page."
    title="Something went wrong!"
  />
);

export default ErrorView;
