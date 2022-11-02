import "./styles.scss";

import { ChangeEvent, FC, useCallback, useEffect } from "react";
import { useState } from "react";
import React from "react";

import type { ICity } from "types/locations";

import { LocationSelect } from "./LocationSelect";
import { ProjectCard } from "./ProjectCard";
import { IProject } from "types/project";

const searchStyle = "align-items-center d-flex justify-content-between";

const Landing: FC = (): JSX.Element => {
  const [city, setCity] = useState<ICity>();
  const [search, setSearch] = useState<string>("");
  const [filtered, setFiltered] = useState<IProject[]>([]);

  const handleSearchChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>): void => {
      setSearch(target.value);
    },
    [setSearch]
  );
  
  const handleSearch = useCallback((): void => {
    if (city !== undefined) {
      setFiltered(city.projects.filter((project): boolean => {
        return project.name.toLowerCase().includes(search.toLowerCase());
      }));
    }
  }, [city, search, setFiltered]);

  useEffect((): void => {
    handleSearch();
  }, [city]);

  return (
    <div className={"p-2"}>
      <LocationSelect onChange={setCity} />
      <label className={"form-label"} htmlFor={"search"}>
        {"Proyecto"}
      </label>
      <div className={"d-flex"}>
        <input
          className={"form-control w-50"}
          onChange={handleSearchChange}
          type={"text"}
          value={search}
        />
        <div
          className={`${searchStyle} flex-row ps-2 w-50`}
        >
          <button className={"btn btn-primary"} onClick={handleSearch}>
            {"Buscar proyecto"}
          </button>
          <p className={"mb-0"}>
            {filtered === undefined || filtered.length === 0
              ? "No se encontró proyectos en esta ciudad"
              : `Se encontró ${filtered.length} resultado(s)`}
          </p>
        </div>
      </div>
      {filtered === undefined ? undefined : filtered.map(
        (project): JSX.Element => (
          <ProjectCard key={project.name} project={project} />
        )
      )}
    </div>
  );
};

export { Landing };
