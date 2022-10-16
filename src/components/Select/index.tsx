import type { FC, HTMLAttributes } from "react";
import React from "react";

interface ISelectProps
  extends Pick<HTMLAttributes<HTMLSelectElement>, "children" | "onChange"> {
  label?: string;
}

const Select: FC<ISelectProps> = ({
  children,
  label = "Selecciona una opción",
  onChange,
}: ISelectProps): JSX.Element => {
  return (
    <select aria-label={label} className={"form-select"} onChange={onChange}>
      {children}
    </select>
  );
};

export { Select };
