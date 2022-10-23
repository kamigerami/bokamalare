import React from "react";
import clx from "classnames";

function FormButton(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLButtonElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { className, ...otherProps } = props;
  const classes = clx(
    "inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
    className
  );

  return <button className={classes} {...otherProps} />;
}

export default FormButton;
