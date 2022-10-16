import "./styles.scss";

import type { FC } from "react";
import { useState } from "react";
import React from "react";

import type { ICity } from "types/locations";

import { LocationSelect } from "./LocationSelect";
import { ProjectCard } from "./ProjectCard";

const Landing: FC = (): JSX.Element => {
  const [city, setCity] = useState<ICity>();

  return (
    <div className={"p-2"}>
      <LocationSelect onChange={setCity} />
      {city === undefined || city.projects.length === 0 ? (
        <p className={"fs-4 mt-3 mb-2"}>
          {"No se encontró proyectos en esta ciudad"}
        </p>
      ) : (
        <>
          <p className={"mt-3 mb-2"}>
            {`Se encontró ${city.projects.length} resultado(s)`}
          </p>
          {city.projects.map(
            ({ description, name, progress, image }): JSX.Element => (
              <ProjectCard
                description={description}
                image={image}
                key={name}
                name={name}
                progress={progress}
              />
            )
          )}
        </>
      )}
    </div>
  );
};

export { Landing };
