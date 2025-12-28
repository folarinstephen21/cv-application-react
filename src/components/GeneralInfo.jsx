import { useState } from "react";
import Section from "./Section";
import "../styles/GeneralInfo.css";

function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);

  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(e.target);
    
    
    setInfo((prevInfo) =>  ({
      ...prevInfo,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <Section title='General information'>
      

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={info.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={info.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={info.phone}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> {info.name}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Phone:</strong> {info.phone}</p>

          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </Section>
  );
}

export default GeneralInfo;
