import { PropsWithChildren, Suspense } from "react";

import cx from "clsx";
import Loading from "../loading";

type Props = {
  className?: string;
  dataTestId?: string;
  headerContent?: JSX.Element;
  headerClassName?: string;
  title?: string;
};

const ContentTile = ({
  children,
  className,
  dataTestId,
  headerContent,
  headerClassName,
  title,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={cx("", className)}
      {...(dataTestId ? { "data-testid": dataTestId } : {})}
    >
      {(title || headerContent) && (
        <div className={cx("", headerClassName)}>
          <div className={""}>{title}</div>
          {headerContent}
        </div>
      )}
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
};

export default ContentTile;
