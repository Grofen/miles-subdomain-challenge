import { PropsWithChildren } from "react";
import Spinner from "../spinner";

import cx from "clsx";

import styles from "./styles.module.scss";

interface Props {
  className?: string;
  isLoading: boolean;
  render?: () => React.ReactNode;
  variant: string;
}

const Suspended = ({
  children,
  className,
  isLoading,
  render,
  variant,
}: PropsWithChildren<Props>) => {
  if (isLoading) {
    return (
      <div className={cx(styles[variant], className)}>
        <Spinner />
      </div>
    );
  }

  if (render) {
    return render();
  }

  return children;
};

export default Suspended;
