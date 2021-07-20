import {FC} from "react";

export enum HairColour {
  Brown = "Your hair is brown",
  Black = "Your hair is black",
  Blonde = "Your hair is blonde",
}

interface Props {
  hairColour: HairColour;
}

export const EnumOptions: FC<Props> = ({hairColour}) => {
  return (
    <div>
      <h1>{HairColour.Brown}</h1>
      {/*output = Your hair is brown*/}
      <h1>{HairColour.Blonde}</h1>
      {/*output = Your hair is brown */}
      {hairColour}
    </div>
  );
};
