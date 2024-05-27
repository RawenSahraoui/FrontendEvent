import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    nomprenom: '',
    email: '',
    phone: '',
    teamname: '',
    skills: ''
  });

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/registration');
      setRegistrations(response.data);
    } catch (error) {
      console.error('Error fetching registrations:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/registration/${id}`);
      setRegistrations(registrations.filter(reg => reg._id !== id));
    } catch (error) {
      console.error('Error deleting registration:', error);
    }
  };

  const handleEditClick = (registration) => {
    setEditId(registration._id);
    setEditFormData({
      nomprenom: registration.nomprenom,
      email: registration.email,
      phone: registration.phone,
      teamname: registration.teamname,
      skills: registration.skills
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/api/registration/${editId}`, editFormData);
      setRegistrations(registrations.map(reg => (reg._id === editId ? response.data : reg)));
      setEditId(null);
      setEditFormData({
        nomprenom: '',
        email: '',
        phone: '',
        teamname: '',
        skills: ''
      });
    } catch (error) {
      console.error('Error updating registration:', error);
    }
  };

  return (
    <div className='admin-container'>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Skills</th>
            <th>Team Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map(reg => (
            <tr key={reg._id}>
              <td>{reg.nomprenom}</td>
              <td>{reg.email}</td>
              <td>{reg.phone}</td>
              <td>{reg.skills}</td>
              <td>{reg.teamname}</td>
              <td>
                <button onClick={() => handleEditClick(reg)}>Edit</button>
                <button onClick={() => handleDelete(reg._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editId && (
        <form onSubmit={handleEditSubmit}>
          <h2>Edit Registration</h2>
          <input
            type="text"
            name="nomprenom"
            placeholder="Name"
            value={editFormData.nomprenom}
            onChange={handleEditChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={editFormData.email}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={editFormData.phone}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="teamname"
            placeholder="Team Name"
            value={editFormData.teamname}
            onChange={handleEditChange}
          />
          <input
            type="text"
            name="skills"
            placeholder="Skills"
            value={editFormData.skills}
            onChange={handleEditChange}
          />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};
export default AdminDashboard;
