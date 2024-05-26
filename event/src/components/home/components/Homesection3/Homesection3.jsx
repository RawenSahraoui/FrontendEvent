import './Homesection3.css'
import skill from './skill.jpg'
import network from './network.png'
export default function Homesection3(){
    return(
        <div id='section3'>
            <h1>UNVEILING THE EXPERIENCE</h1>
            <h2>Discover the Unseen!</h2>
            <div id='section31'>
                <div className='section310'>
                    <div className='section3100'>
                        <h3>Skill Development</h3>
                        <p>Participating in a hackathon offers numerous benefits that can significantly enhance both personal and professional development. One of the primary advantages is skill development. Participants have the opportunity to hone their technical skills, such as coding, design, and problem-solving, by working on real-world projects. The intense, time-bound nature of hackathons pushes participants to think creatively and efficiently, often learning new programming languages, tools, and technologies on the fly. Additionally, hackathons foster the growth of essential soft skills like teamwork, communication, and time management. Collaborating with diverse teams to achieve common goals under tight deadlines requires effective communication and strategic planning. This comprehensive skill development makes hackathons a valuable experience for anyone looking to advance their abilities and career prospects.</p>
                    </div>
                    <img src={skill} alt="" />
                </div>
                <div className='section310'>
                    <img src={network} alt="" />
                    <div className='section3100'>
                        <h3>Networking Opportunities</h3>
                        <p>Hackathons are excellent networking platforms, offering participants the chance to connect with peers, mentors, and industry professionals. By working closely with team members, participants can build strong professional relationships and learn from each other's expertise. Many hackathons also feature mentors and judges from leading tech companies, providing participants with direct access to experienced professionals who can offer guidance and feedback. These interactions can open doors to future career opportunities, internships, and collaborations. Additionally, the visibility gained from participating in or winning a hackathon can attract the attention of potential employers or partners, further enhancing career prospects. Overall, the networking opportunities available at hackathons can be invaluable for personal and professional growth.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}