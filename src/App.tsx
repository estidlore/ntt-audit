import type { FC } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppWrapper } from "components/AppWrapper";
import { Nav } from "components/Nav";
import { Landing } from "views/Landing";
import { NotFound } from "views/NotFound";

const App: FC = (): JSX.Element => (
  <BrowserRouter>
    <AppWrapper>
      <Nav brand={"COLIDAR"} />
      <Routes>
        <Route element={<Landing />} path={""} />
        <Route element={<NotFound />} path={"*"} />
      </Routes>
    </AppWrapper>
  </BrowserRouter>
);

export { App };
