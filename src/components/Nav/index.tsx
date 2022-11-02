import type { FC, ReactNode } from "react";
import React from "react";
import { NavLink as RRNavLink } from "react-router-dom";

import { NavLink } from "./NavLink";

interface INavProps {
  brand?: ReactNode;
  children?: ReactNode;
}

const Nav: FC<INavProps> = ({
  brand,
  children,
}: Readonly<INavProps>): JSX.Element => (
  <nav
    className={"bg-primary px-4 navbar navbar-dark navbar-expand-lg text-light"}
  >
    {brand === undefined ? undefined : (
      <RRNavLink className={"navbar-brand"} to={"/"}>
        {brand}
      </RRNavLink>
    )}
    <div className={"collapse navbar-collapse"} id={"nav-links"}>
      <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
        {children}
      </ul>
    </div>
    <button
      aria-controls={"nav-links"}
      aria-expanded={false}
      aria-label={"Toggle navigation"}
      className={"navbar-toggler"}
      data-bs-target={"#nav-links"}
      data-bs-toggle={"collapse"}
      type={"button"}
    >
      <span className={"navbar-toggler-icon"} />
    </button>
  </nav>
);

export type { INavProps };
export { Nav, NavLink };
