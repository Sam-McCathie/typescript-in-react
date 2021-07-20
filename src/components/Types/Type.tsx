import {FC} from "react";

export enum HairColour {
  Brown = "Your hair is brown",
  Black = "Your hair is black",
  Blonde = "Your hair is blonde",
}

interface Props {
  hairColour: HairColour;
}

export const Type: FC<Props> = ({hairColour}) => {
  //Define potential optios with type -> anything option not defined by the type will return an error.
  type NameType = "Sam" | "Acacia" | "Sista" | 25;
  const name: NameType = 25;

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
