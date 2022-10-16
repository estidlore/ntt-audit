import type { FC } from "react";
import React from "react";

import type { IProjectBasicData } from "types/project";

type IProjectCardProps = IProjectBasicData;

const ProjectCard: FC<IProjectCardProps> = ({
  description,
  image,
  name,
  progress,
}: IProjectCardProps): JSX.Element => {
  return (
    <div className={"bg-primary card d-flex flex-row my-2 text-light"}>
      <img className={"img-thumbnail"} src={image} />
      <div className={"d-flex flex-fill justify-content-between px-4"}>
        <div>
          <p className={"fs-5 fw-bold mb-0"}>{name}</p>
          <p className={"mb-0"}>{description}</p>
        </div>
        <div className={"d-flex flex-column align-items-center"}>
          <p className={"mb-2"}>{"Progreso"}</p>
          <p  className={"bg-light progress d-flex fw-bold mb-0 text-dark"}>
            {`${progress}%`}
          </p>
        </div>
      </div>
    </div>
  );
};

export type { IProjectCardProps };
export { ProjectCard };
