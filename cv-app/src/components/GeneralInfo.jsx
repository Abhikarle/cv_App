import { useState } from 'react';
import '../styles/generalInfo.css';

function GeneralInfo() {
  const [editing, setEditing] = useState(true);

  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  function handleChange(e) {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="section">
      <h2>General Information</h2>

      {editing ? (
        <>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={info.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={info.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={info.phone}
            onChange={handleChange}
          />
          <br />
          <button className='gen-btn' onClick={() => setEditing(false)}>
            Submit
          </button>
        </>
      ) : (
        <>
          <p><strong>Name:</strong> {info.name}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Phone:</strong> {info.phone}</p>

          <button  className='edit-btn' onClick={() => setEditing(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default GeneralInfo;