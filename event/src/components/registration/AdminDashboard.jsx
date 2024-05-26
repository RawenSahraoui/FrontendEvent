import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    axios.get('/api/registrations')
      .then(response => setRegistrations(response.data))
      .catch(error => console.error('Error fetching registrations:', error));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Skills</th>
            <th>Team Name</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map(reg => (
            <tr key={reg._id}>
              <td>{reg.nomprenom}</td>
              <td>{reg.email}</td>
              <td>{reg.phone}</td>
              <td>{reg.skills}</td>
              <td>{reg.teamName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
