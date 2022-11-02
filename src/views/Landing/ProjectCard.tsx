import type { FC } from "react";
import React, { useCallback } from "react";

import type { IProject, IProjectBasicData } from "types/project";

interface IProjectCardProps {
  onClick?: (project?: IProject) => void;
  project: IProjectBasicData;
}

const ProjectCard: FC<IProjectCardProps> = ({
  onClick,
  project,
}: IProjectCardProps): JSX.Element => {
  const handleClick = useCallback((): void => {
    onClick?.(project);
  }, [onClick, project]);

  return (
    <div
      className={"bg-primary card d-flex flex-row my-2 text-light"}
      onClick={handleClick}
    >
      <img className={"img-thumbnail"} src={project.image} />
      <div className={"d-flex flex-fill justify-content-between px-4"}>
        <div>
          <p className={"fs-5 fw-bold mb-0"}>{project.name}</p>
          <p className={"mb-0"}>{project.description}</p>
        </div>
        <div className={"d-flex flex-column align-items-center"}>
          <p  className={"card-progress d-flex fw-bold mb-0 text-light"}>
            {`${project.progress}%`}
          </p>
          <p className={"mb-2"}>{"Progreso"}</p>
        </div>
      </div>
    </div>
  );
};

export type { IProjectCardProps };
export { ProjectCard };
