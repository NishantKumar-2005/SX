import React from 'react'
import './about.css';

function About() {
  return (
    <>
      <h1 style={{ color: '#dd62f9', display: 'flex', justifyContent: 'center', fontFamily:'Roboto', fontSize: '80px',fontWeight:'800' }}>Plan</h1>
      <p style={{ fontSize: '30px', fontFamily: 'Arial, Helvetica, sans-serif', color: 'black', textAlign:'center',marginBottom:'30px' }}>
        Discovered vulnerabilities.....Choose our expert service for comprehensive remediation
      </p>
      <div className="main">
        <figure className="snip1390" style={{ minWidth: '420px' }}>
          <figcaption>
            <h1 class="heading"><b>Basic</b></h1>
            <blockquote>
              <ul className="list">
                <li>Securing Current Open Port</li>
                Our expert service ensures the immediate security of identified open ports on your devices.
                <li>Precautions for Future:</li>
                provide detailed explanations about the precautions to be taken to prevent future vulnerabilities.
                <li>Price</li> Just ₹499 per scan
              </ul>
            </blockquote>
          </figcaption>
        </figure>
        <figure className="snip1390" style={{ minWidth: '420px' }}>
          <figcaption>
            <h1 class="heading"><b>Advance</b></h1>
            <blockquote>
              <ul className="list">
                <li>Securing Current Open Port</li>
                Our expert service ensures the immediate security of identified open ports on your devices.
                <li>Precautions for Future:</li>
                provide detailed explanations about the precautions to be taken to prevent future vulnerabilities.
                <li>Routine Device Checkup</li>
                Enjoy peace of mind with scheduled device check-ups every three months
                <li>Price</li> Just ₹1600 per quarter
              </ul>
            </blockquote>
          </figcaption>
        </figure>
      </div>
      <h1 style={{ color: '#8E62F9', display: 'flex', justifyContent: 'center', fontSize: '50px', marginTop:'3rem'}}>Testimonials</h1>
      <div className="main">
        <figure className="snip1390">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" className="profile" />
          <figcaption>
            <h2>Eleanor Crisp</h2>
            <h4>UX Designer</h4>
            <blockquote>SecureXpert is a game-changer in cybersecurity! With its user-friendly interface, I can easily scan my devices for vulnerabilities and receive comprehensive reports. Truly amazing!</blockquote>
          </figcaption>
        </figure>
        <figure className="snip1390 hover">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" className="profile" />
          <figcaption>
            <h2>Gordon Norman</h2>
            <h4>SDE-1</h4>
            <blockquote>Impressed by SecureXpert's proactive approach to cybersecurity. The detailed scans and vulnerability assessments give me confidence in the security of my devices.</blockquote>
          </figcaption>
        </figure>
        <figure className="snip1390">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" className="profile" />
          <figcaption>
            <h2>Sue Shei</h2>
            <h4>Ethical Hacker</h4>
            <blockquote>SecureXpert goes beyond traditional cybersecurity tools. Not only does it identify vulnerabilities with precision, but it also offers a unique platform for learning and development in the field.</blockquote>
          </figcaption>
        </figure>
      </div>
    </>

  )
}

export default About
