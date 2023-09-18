import { ComponentPropsWithoutRef } from "react";
import cx from "clsx";

import styles from "./styles.module.scss";

type Props = Omit<ComponentPropsWithoutRef<"div">, "children" | "role">;

const Spinner = ({ className, ...props }: Props): JSX.Element => (
  <div className={cx(styles.icon, className)} role="status" {...props}></div>
);

export default Spinner;
