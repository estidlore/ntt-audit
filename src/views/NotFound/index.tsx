import type { FC } from "react";
import React from "react";

const NotFound: FC = (): JSX.Element => (
  <div className={"align-items-center d-flex flex-column px-5 py-5"}>
    <p className={"fs-1 fw-bold"}>{"Oops!"}</p>
    <p className={"fs-3"}>{"No se pudo encontrar la página que buscas."}</p>
  </div>
);

export { NotFound };
