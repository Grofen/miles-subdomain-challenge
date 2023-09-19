import { ComponentPropsWithoutRef } from "react";
import cx from "clsx";

import Spinner from "../spinner";

type Props = ComponentPropsWithoutRef<"div">;

const Loading = ({ children, className }: Props): JSX.Element => {
  return (
    <div
      className={cx(
        "flex items-center h-full w-full justify-center",
        className
      )}
    >
      <Spinner />
      {children}
    </div>
  );
};

export default Loading;
