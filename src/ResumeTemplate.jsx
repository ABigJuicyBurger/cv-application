import { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import PracticalExperience from "./PracticalExperience";
import "./styles/ResumeTemplate.css";

function ResumeTemplate() {
  const [isViewMode, setIsViewMode] = useState(true); // otherwise we're in "edit mode"

  const toggleViewMode = () => setIsViewMode(!isViewMode);

  return (
    <div className="resume-container">
      <div className="controls-section">
        <h1>Resume Template Generator</h1>
        <button onClick={() => toggleViewMode()}>Toggle View/Edit</button>
      </div>
      <div className="resume-content">
        <GeneralInfo isViewMode={isViewMode} toggleView={toggleViewMode} />
        <Education isViewMode={isViewMode} toggleView={toggleViewMode} />
        <PracticalExperience
          isViewMode={isViewMode}
          toggleView={toggleViewMode}
        />
        {/* Pass view and toggleView as props */}
        {console.log("Current view value:", isViewMode)}
      </div>
    </div>
  );
}

export default ResumeTemplate;
