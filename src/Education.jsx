import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../src/styles/Education.css";

const INITIAL_EDU_ENTRIES = [
  {
    id: uuidv4(),
    schoolName: "Harvard University",
    titleOfStudy: "Computer Science",
    dateOfStudy: "2021-2024",
  },
];

function Education({ isViewMode }) {
  // function myFn(arg1){
  //   return [item1, item2]
  // }

  const [educationEntries, setEducationEntries] = useState(INITIAL_EDU_ENTRIES);

  function addEducationList() {
    const nextState = [
      ...educationEntries,
      {
        id: uuidv4(),
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: "",
        // ...myObj
      },
    ];

    setEducationEntries(nextState);
  }

  function removeEducationComponent(id) {
    if (educationEntries.length > 1) {
      setEducationEntries(
        educationEntries.filter((education) => education.id !== id)
      );
    }
  }

  function VieweableEducationField({ education }) {
    return (
      <div className="view-mode">
        <section>
          <h2>{education.schoolName}</h2>
          <h2>{education.titleOfStudy}</h2>
          <h2>Date of Study: {education.dateOfStudy}</h2>
        </section>
      </div>
    );
  }

  function EditableEducationField({ education, isFirst }) {
    const [localEducation, setLocalEducation] = useState(education);

    const handleLocalChange = (field, value) => {
      setLocalEducation({ ...localEducation, [field]: value });
    };

    const handleSubmit = () => {
      setEducationEntries(
        educationEntries.map((entry) =>
          entry.id === education.id ? localEducation : entry
        )
      );
    };

    return (
      <div>
        <h1>
          Education
          {isFirst && (
            <button onClick={addEducationList}>Add Education Field</button>
          )}
          {!isFirst && (
            <button onClick={() => removeEducationComponent(education.id)}>
              Remove Education Field
            </button>
          )}
        </h1>
        <section>
          <label htmlFor={`school-${education.id}`}>School Name</label>
          <input
            id={`school-${education.id}`}
            value={localEducation.schoolName}
            onChange={(e) => handleLocalChange("schoolName", e.target.value)}
            onBlur={handleSubmit}
          />
          <label htmlFor={`study-${education.id}`}>Title of Study</label>
          <input
            id={`study-${education.id}`}
            value={localEducation.titleOfStudy}
            onChange={(e) => handleLocalChange("titleOfStudy", e.target.value)}
            onBlur={handleSubmit}
          />
          <label htmlFor={`date-${education.id}`}>Date of Study</label>
          <input
            id={`date-${education.id}`}
            value={localEducation.dateOfStudy}
            onChange={(e) => handleLocalChange("dateOfStudy", e.target.value)}
            onBlur={handleSubmit}
          />
        </section>
      </div>
    );
  }

  return (
    <div>
      {educationEntries.map((entry, index) => (
        <div key={entry.id}>
          {!isViewMode ? (
            <EditableEducationField education={entry} isFirst={index === 0} />
          ) : (
            <VieweableEducationField education={entry} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Education;
