import { useState } from "react";
import GeneralInfo from "./GeneralInfo";

function ResumeTemplate() {
  const [view, toggleView] = useState(true);

  return (
    <div>
      <GeneralInfo view={!view} toggleView={toggleView} />
      {/* Pass view and toggleView as props */}
      {console.log("Current view value:", view)}
      <button onClick={() => toggleView(!view)}>Toggle View/Edit</button>
    </div>
  );
}

export default ResumeTemplate;
