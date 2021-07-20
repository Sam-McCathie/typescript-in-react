import {FC, ChangeEvent, useState} from "react";

export const UsingState: FC = () => {
  // <{type} | {type}> = | is a union sign/ or
  const [country, setCountry] = useState<string | null>("");

  //import the change event -> pass this function to onchange. -> this is the .ts way of (event) => {setCountry(event.target.value)}
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <input placeholder="Type your country..." onChange={handleChange} />
      {country}
    </div>
  );
};
