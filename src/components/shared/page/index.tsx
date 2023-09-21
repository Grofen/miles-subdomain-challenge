import { PropsWithChildren } from "react";
import cx from "clsx";

import Navbar from "./navbar";

type Props = {
  contentClassName?: string;
  isNavShown?: boolean;
  wrapperClassName?: string;
};

const Page = ({
  children,
  contentClassName = "",
  isNavShown = true,
  wrapperClassName = "",
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <div className={cx("pt-36 pb-36 sm:pt-60 lg:pt-60", wrapperClassName)}>
      {isNavShown && <Navbar />}
      <div className={cx("", contentClassName)}>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Page;
