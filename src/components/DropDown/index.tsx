import type { FC, ReactNode } from "react";
import React from "react";

interface IDropDownProps {
  button: ReactNode;
  children: ReactNode;
}

const DropDown: FC<IDropDownProps> = ({
  button,
  children,
}: IDropDownProps): JSX.Element => {
  return (
    <div className={"dropdown"}>
      <button
        aria-expanded={false}
        className={"btn btn-secondary dropdown-toggle"}
        data-bs-toggle={"dropdown"}
        role={"button"}
      >
        {button}
      </button>
      <ul className={"dropdown-menu"}>{children}</ul>
    </div>
  );
};

export { DropDown };
