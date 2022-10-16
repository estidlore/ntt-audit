import type { FC, ReactNode } from "react";
import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

interface IAppWrapperProps {
  children: ReactNode;
}

const AppWrapper: FC<IAppWrapperProps> = ({
  children,
}: Readonly<IAppWrapperProps>): JSX.Element => {
  const { hash, pathname } = useLocation();

  useLayoutEffect(() => {
    const el = document.getElementById(hash.replace("#", ""));
    setTimeout(() => {
      window.scrollTo({
        behavior: el ? "smooth" : "auto",
        top: el ? el.offsetTop : 0
      });
    }, 0);
  }, [hash, pathname]);
  
  return (
    <div className={"bg-light fs-6 text-dark min-vh-100"}>{children}</div>
  );
};

export type { IAppWrapperProps };
export { AppWrapper };
