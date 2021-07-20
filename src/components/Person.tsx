import * as React from "react";

//define the type of each prop
// ? means the prop is optional
interface Props {
  name: string;
  age: number;
  email?: string;
}

export const Person = (props: Props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};
