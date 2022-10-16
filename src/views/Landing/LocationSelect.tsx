import type { ChangeEvent, FC } from "react";
import React, { useCallback, useEffect, useState } from "react";

import { Select } from "components/Select";
import type { ICity, IProvince } from "types/locations";
import { provinces } from "utils/locations";

interface ILocationSelectProps {
  onChange: (city?: ICity) => void;
}

const LocationSelect: FC<ILocationSelectProps> = ({
  onChange,
}: ILocationSelectProps): JSX.Element => {
  const [city, setCity] = useState(0);
  const [province, setProvince] = useState(0);

  const handleChangeCity = useCallback(
    ({ target }: ChangeEvent<HTMLSelectElement>): void => {
      setCity(parseInt(target.value));
    },
    [setCity]
  );

  const handleChangeProvince = useCallback(
    ({ target }: ChangeEvent<HTMLSelectElement>): void => {
      setProvince(parseInt(target.value));
      setCity(0);
    },
    [setCity, setProvince]
  );

  useEffect((): void => {
    const { cities } = provinces[province];
    onChange(cities.length > 0 ? cities[city] : undefined);
  }, [city, province]);

  return (
    <div className={"d-flex"}>
      <div className={"pe-1 w-50"}>
        <p className={"mb-1"}>{"Departamento"}</p>
        <Select onChange={handleChangeProvince}>
          {provinces.map(({ name }: IProvince, idx): JSX.Element => (
            <option key={name} value={idx}>{name}</option>
          ))}
        </Select>
      </div>
      <div className={"ps-1 w-50"}>
        <p className={"mb-1"}>{"Ciudad"}</p>
        <Select onChange={handleChangeCity}>
          {provinces[province].cities.map(
            ({ name }: ICity, idx): JSX.Element => (
              <option key={name} value={idx}>{name}</option>
            )
          )}
        </Select>
      </div>
    </div>
  );
};

export type { ILocationSelectProps };
export { LocationSelect };
