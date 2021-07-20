import React, {FC} from "react";
//FC = functional component
import "./App.css";
import {EnumOptions, HairColour} from "./components/Types/Enums";
import {OtherPerson} from "./components/OtherPerson";
import {Person} from "./components/Person";
import {UsingState} from "./components/State/UsingState";

const App: FC = () => {
  return (
    <div>
      <Person name="Sam" age={25} email="sam@gmail.com" />
      <OtherPerson name="Acacia" age={23} email="acacia@gmail.com" />
      <UsingState />
      <EnumOptions hairColour={HairColour.Blonde} />
    </div>
  );
};

export default App;
