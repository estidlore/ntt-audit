interface IProjectBasicData {
  description: string;
  image?: string;
  name: string;
  progress: number;
}

type IProject = IProjectBasicData;

export type { IProject, IProjectBasicData };
