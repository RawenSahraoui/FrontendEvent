import './Contact.css';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, comment }),
        });

        if (response.ok) {
            alert('Message envoyé avec succès !');
            setName('');
            setEmail('');
            setComment('');
        } else {
            alert('Échec de l\'envoi du message.');
        }
    };

    return (
        <div id="contact">
            <div className="form-container sign-up">
                <form onSubmit={handleSubmit}>
                    <h1>Send Us a Message</h1>
                    <div className="social-icons">
                        <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    </div>
                    <input
                        id="fullname"
                        type="text"
                        name="nomprenom"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        className="inputcontact1"
                        name="message"
                        placeholder="BeFree!"
                        required
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );

}
