import { useState } from "react";
import Section from "./Section";
import "../styles/Experience.css";

function Experience() {
  const [experienceList, setExperienceList] = useState([]);

  const [currentExp, setCurrentExp] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setCurrentExp((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setExperienceList((prevList) => [
      ...prevList,
      { ...currentExp, id: crypto.randomUUID() },
    ]);

    setCurrentExp({
      company: "",
      position: "",
      responsibilities: "",
      from: "",
      to: "",
    });

    setIsEditing(false);
  }

  function handleEdit(exp) {
    setCurrentExp({
      company: exp.company,
      position: exp.position,
      responsibilities: exp.responsibilities,
      from: exp.from,
      to: exp.to,
    });

    setExperienceList((prevList) =>
      prevList.filter((item) => item.id !== exp.id)
    );

    setIsEditing(true);
  }

  return (
    <Section title="Practical Experience">
      {isEditing && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Company Name:</label>
            <input
              type="text"
              name="company"
              value={currentExp.company}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Position Title:</label>
            <input
              type="text"
              name="position"
              value={currentExp.position}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Main Responsibilities:</label>
            <textarea
              name="responsibilities"
              value={currentExp.responsibilities}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>From:</label>
            <input
              type="date"
              name="from"
              value={currentExp.from}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>To:</label>
            <input
              type="date"
              name="to"
              value={currentExp.to}
              onChange={handleChange}
            />
          </div>

          <button type="submit">
            {experienceList.length === 0 ? "Add Experience" : "Save Experience"}
          </button>
        </form>
      )}

      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>
          Add Another Experience
        </button>
      )}

      {experienceList.map((exp) => (
        <div key={exp.id} className="experience-item">
          <p><strong>Company:</strong> {exp.company}</p>
          <p><strong>Position:</strong> {exp.position}</p>
          <p><strong>Responsibilities:</strong></p>
          <p>{exp.responsibilities}</p>
          <p>
            <strong>Duration:</strong> {exp.from} – {exp.to}
          </p>

          <button onClick={() => handleEdit(exp)}>Edit</button>
        </div>
      ))}
    </Section>
  );
}

export default Experience;
