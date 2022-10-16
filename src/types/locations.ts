import type { IProject } from "./project";

interface IProvince {
  name: string;
  cities: ICity[];
}

interface ICity {
  name: string;
  projects: IProject[];
}

export type { ICity, IProvince };
