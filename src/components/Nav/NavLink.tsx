import type { FC } from "react";
import React from "react";
import type { LinkProps } from "react-router-dom";
import { NavLink as RRNavLink } from "react-router-dom";

const NavLink: FC<LinkProps> = ({
  children,
  to,
}: LinkProps): JSX.Element => {
  return (
    <li className={"nav-item"}>
      <RRNavLink className={"nav-link"} to={to}>
        {children}
      </RRNavLink>
    </li>
  );
};

export { NavLink };
