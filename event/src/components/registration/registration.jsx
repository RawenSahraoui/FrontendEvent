import React from 'react';
import './Registration.css';
import { useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import batiments from './batiments.jpg';

export default function Registration() {
    const [formData, setFormData] = useState({
        nomprenom: '',
        email: '',
        phone: '',
        teamname: '',
        skills: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(errorMessage || 'Error sending registration data');
            }

            const data = await response.json();
            console.log('Registration successful', data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    return (
        <div className="registration-container">
            <div id='batiment'>
                <img src={batiments} alt="" />
            </div>
            <div className="form-containerregistration">
                <form onSubmit={handleSubmit}>
                    <h1>Registration for InnoHack</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
                    </div>
                    <input
                    id="fullname"
                    type="text"
                    name="nomprenom"
                    placeholder="Nom et Prénom"
                    value={formData.nomprenom}
                    onChange={handleChange}
                    required
                    />
                    <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                    <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    />
                    <input
                    type="text"
                    name="teamname"
                    placeholder="Team Name"
                    value={formData.teamname}
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    name="skills"
                    placeholder="Select Your Skills"
                    value={formData.skills}
                    onChange={handleChange}
                    required
                    />
                    <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    ></textarea>
                    <div className="checkbox-container">
                        <input type="checkbox" id="ageCheck" />
                        <label htmlFor="ageCheck">I confirm that I am over 18 years old.</label>
                    </div>
                    <button type="submit">Registrate</button>
                </form>
            </div>
            
        </div>
    );
}
