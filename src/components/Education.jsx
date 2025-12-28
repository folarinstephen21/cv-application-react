import { useState } from "react";
import Section from "./Section";
import "../styles/Education.css";

function Education() {
  const [educationList, setEducationList] = useState([]);

  const [currentEdu, setCurrentEdu] = useState({
    school: "",
    study: "",
    date: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setCurrentEdu((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setEducationList((prevList) => [
      ...prevList,
      { ...currentEdu, id: crypto.randomUUID() },
    ]);

    setCurrentEdu({
      school: "",
      study: "",
      date: "",
    });

    setIsEditing(false);
  }

  function handleEdit(edu) {
    setCurrentEdu({
      school: edu.school,
      study: edu.study,
      date: edu.date,
    });

    setEducationList((prevList) =>
      prevList.filter((item) => item.id !== edu.id)
    );

    setIsEditing(true);
  }

  return (
    <Section title="Educational Experience">
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>School Name:</label>
            <input
              type="text"
              name="school"
              value={currentEdu.school}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Title of Study:</label>
            <input
              type="text"
              name="study"
              value={currentEdu.study}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Date of Study:</label>
            <input
              type="text"
              name="date"
              value={currentEdu.date}
              onChange={handleChange}
            />
          </div>

          <button type="submit">
            {educationList.length === 0 ? "Add Education" : "Save Education"}
          </button>
        </form>
      )}

      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>
          Add Another Education
        </button>
      )}

      {educationList.map((edu) => (
        <div key={edu.id} className="education-item">
          <p><strong>School:</strong> {edu.school}</p>
          <p><strong>Study:</strong> {edu.study}</p>
          <p><strong>Date:</strong> {edu.date}</p>

          <button onClick={() => handleEdit(edu)}>Edit</button>
        </div>
      ))}
    </Section>
  );
}

export default Education;
