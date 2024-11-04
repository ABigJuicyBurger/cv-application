import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../src/styles/PracticalExperience.css";

const INITIAL_EXP_ENTRIES = [
  {
    id: uuidv4(),
    companyName: "Google",
    positionTitle: "Software Engineer",
    mainTasks: "Developing software",
    dateOfEmployment: "2021-2024",
  },
];

function PracticalExperience({ isViewMode }) {
  const [practicalExperienceEntries, setPracticalExperienceEntries] =
    useState(INITIAL_EXP_ENTRIES);

  function addPracticalExperienceList() {
    const nextState = [
      ...practicalExperienceEntries,
      {
        id: uuidv4(),
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        dateOfEmployment: "",
      },
    ];

    setPracticalExperienceEntries(nextState);
  }

  function removePracticalExperienceComponent(id) {
    if (practicalExperienceEntries.length > 1) {
      setPracticalExperienceEntries(
        practicalExperienceEntries.filter((experience) => experience.id !== id)
      );
    }
  }

  function VieweablePracticalExperienceField({ experience }) {
    return (
      <div className="view-mode">
        <h1>Practical Experience</h1>
        <section>
          <h2>{experience.companyName}</h2>
          <h2>{experience.positionTitle}</h2>
          <h2>Main Tasks: {experience.mainTasks}</h2>
          <h2>Date of Employment: {experience.dateOfEmployment}</h2>
        </section>
      </div>
    );
  }

  function EditablePracticalExperienceField({ experience, isFirst }) {
    const [localExperience, setLocalExperience] = useState(experience);

    const handleLocalChange = (field, value) => {
      setLocalExperience({ ...localExperience, [field]: value });
    };

    const handleSubmit = () => {
      setPracticalExperienceEntries(
        practicalExperienceEntries.map((entry) =>
          entry.id === experience.id ? localExperience : entry
        )
      );
    };

    return (
      <div>
        <h1>
          Practical Experience
          {isFirst && (
            <button onClick={addPracticalExperienceList}>
              Add Practical Experience Field
            </button>
          )}
          {!isFirst && (
            <button
              onClick={() => removePracticalExperienceComponent(experience.id)}
            >
              Remove Practical Experience Field
            </button>
          )}
        </h1>
        <section>
          <label htmlFor={`company-${experience.id}`}>Company Name</label>
          <input
            id={`company-${experience.id}`}
            value={localExperience.companyName}
            onChange={(e) => handleLocalChange("companyName", e.target.value)}
            onBlur={handleSubmit}
          />
          <label htmlFor={`position-${experience.id}`}>Position Title</label>
          <input
            id={`position-${experience.id}`}
            value={localExperience.positionTitle}
            onChange={(e) => handleLocalChange("positionTitle", e.target.value)}
            onBlur={handleSubmit}
          />
          <label htmlFor={`tasks-${experience.id}`}>Main Tasks</label>
          <input
            id={`tasks-${experience.id}`}
            value={localExperience.mainTasks}
            onChange={(e) => handleLocalChange("mainTasks", e.target.value)}
            onBlur={handleSubmit}
          />
          <label htmlFor={`date-${experience.id}`}>Date of Employment</label>
          <input
            id={`date-${experience.id}`}
            value={localExperience.dateOfEmployment}
            onChange={(e) =>
              handleLocalChange("dateOfEmployment", e.target.value)
            }
            onBlur={handleSubmit}
          />
        </section>
      </div>
    );
  }

  return (
    <div>
      {practicalExperienceEntries.map((entry, index) => (
        <div key={entry.id}>
          {!isViewMode ? (
            <EditablePracticalExperienceField
              experience={entry}
              isFirst={index === 0}
            />
          ) : (
            <VieweablePracticalExperienceField experience={entry} />
          )}
        </div>
      ))}
    </div>
  );
}

export default PracticalExperience;
