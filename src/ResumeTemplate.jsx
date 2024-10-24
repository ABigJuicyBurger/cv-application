import { useState } from "react";
import GeneralInfo from "./GeneralInfo";

function ResumeTemplate() {
  const [view, toggleView] = useState(true);

  return (
    <div>
      <GeneralInfo />
      <button onClick={() => toggleView(!view)}>Toggle View/Edit</button>
    </div>
  );
}
