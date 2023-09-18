import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  invert?: boolean;
} & (
  | (ComponentPropsWithoutRef<"button"> & { href?: undefined })
  | (ComponentPropsWithoutRef<"a"> & { href: string })
);

const Button = ({
  invert = false,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  className = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed",
    invert
      ? "bg-white text-neutral-950 hover:bg-neutral-200"
      : "bg-neutral-950 text-white hover:bg-neutral-800"
  );

  const inner = <span className="relative top-px">{children}</span>;

  if (typeof props.href === "undefined") {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    );
  }

  const { href, ...restProps } = props;

  return (
    <a href={href} className={className} {...restProps} target="_blank">
      {inner}
    </a>
  );
};

export default Button;
