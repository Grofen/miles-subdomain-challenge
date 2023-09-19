import { PropsWithChildren } from "react";
import cx from "clsx";

import { Suspense } from "react";

import Navbar from "./navbar";
import Loading from "../loading";

type Props = {
  customPageHeader?: JSX.Element;
  isLoading?: boolean;
  isNavShown?: boolean;
  name: string;
  title?: string;
  wrapperClassName?: string;
  contentClassName?: string;
};

const Page = ({
  children,
  isNavShown = true,
  wrapperClassName = "",
  contentClassName = "",
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <div className={cx("", wrapperClassName)}>
        {isNavShown && <Navbar />}
        <div className={cx("", contentClassName)}>
          <div className="">{children}</div>
        </div>
      </div>
    </Suspense>
  );
};

export default Page;
