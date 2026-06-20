import { useState } from 'react';
import '../styles/experience.css';

function Experience() {
  const [editing, setEditing] = useState(true);

  const [experience, setExperience] = useState({
    company: '',
    position: '',
    responsibilities: '',
    from: '',
    until: '',
  });

  function handleChange(e) {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="section">
      <h2>Practical Experience</h2>

      {editing ? (
        <>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={experience.company}
            onChange={handleChange}
          />

          <input
            type="text"
            name="position"
            placeholder="Position Title"
            value={experience.position}
            onChange={handleChange}
          />

          <textarea
            name="responsibilities"
            placeholder="Responsibilities"
            value={experience.responsibilities}
            onChange={handleChange}
          />

          <input
            type="date"
            name="from"
            value={experience.from}
            onChange={handleChange}
          />

          <input
            type="date"
            name="until"
            value={experience.until}
            onChange={handleChange}
          />
          <br />
          <button className='exp-btn' onClick={() => setEditing(false)}>
            Submit
          </button>
        </>
      ) : (
        <>
          <p><strong>Company:</strong> {experience.company}</p>
          <p><strong>Position:</strong> {experience.position}</p>
          <p>
            <strong>Responsibilities:</strong>{' '}
            {experience.responsibilities}
          </p>
          <p>
            <strong>Duration:</strong>{' '}
            {experience.from} - {experience.until}
          </p>

          <button className='edit-btn' onClick={() => setEditing(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default Experience;