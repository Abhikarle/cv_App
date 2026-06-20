import { useState } from 'react';
import '../styles/education.css';

function Education() {
  const [editing, setEditing] = useState(true);

  const [education, setEducation] = useState({
    school: '',
    degree: '',
    date: '',
  });

  function handleChange(e) {
    setEducation({
      ...education,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="section">
      <h2>Education</h2>

      {editing ? (
        <>
          <input
            type="text"
            name="school"
            placeholder="School Name"
            value={education.school}
            onChange={handleChange}
          />

          <input
            type="text"
            name="degree"
            placeholder="Title of Study"
            value={education.degree}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={education.date}
            onChange={handleChange}
          />
          <br />
          <button className='edu-btn' onClick={() => setEditing(false)}>
            Submit
          </button>
        </>
      ) : (
        <>
          <p><strong>School:</strong> {education.school}</p>
          <p><strong>Study:</strong> {education.degree}</p>
          <p><strong>Date:</strong> {education.date}</p>

          <button className='edit-btn' onClick={() => setEditing(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default Education;