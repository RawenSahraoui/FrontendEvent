import React from 'react';
import './Agenda.css';
import image1 from './image1.jpg';

export default function Agenda() {
  const sessions = [
    {
      time: '09H00',
      title: 'Conference Sessions',
      description: 'Participate in expert-led sessions to explore innovative ideas and gain valuable insights, shaping the future of Responsible Business and Entrepreneurship in your field.',
      image: image1
    },
    {
      time: '10H00 - 12H00',
      title: 'Networking with Exhibitors',
      description: 'Explore innovative solutions, build relationships, and discover opportunities in a dynamic networking environment.',
      image: image1
    },
    {
      time: '14H30 - 15H00',
      title: 'Final Reflections',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem architecto amet aliquid ipsam veniam magni sit fuga maxime vitae, quam velit optio, soluta minima. Harum excepturi praesentium quae eum itaque',
      image: image1
    },
    {
      time: '14H30 - 15H00',
      title: 'Final Reflections',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem architecto amet aliquid ipsam veniam magni sit fuga maxime vitae, quam velit optio, soluta minima. Harum excepturi praesentium quae eum itaque',
      image: image1
    },
    {
      time: '14H30 - 15H00',
      title: 'Final Reflections',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem architecto amet aliquid ipsam veniam magni sit fuga maxime vitae, quam velit optio, soluta minima. Harum excepturi praesentium quae eum itaque',
      image: image1
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='titre'>Event Schedule</h1>
        <br />
        <br />
        <div className='a'>
          <div className='trait'></div>
          <h2>#hack___the___future</h2>
          <div className="trait"></div>
        </div>
      </header>
      <main>
        {sessions.map((session, index) => (
          <section key={index} className="Session">
            <div className="TimeContainer">
              <img src={session.image} alt="Clock icon" className="Clock" />
              <p className="Time">{session.time}</p>
            </div>
            <h2>{session.title}</h2>
            <p className="Description">{session.description}</p>
          </section>
        ))}
      </main>
    </div>
  );
}