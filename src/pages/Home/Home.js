import React from 'react'
import './home.css';
import Resume from '../../assets/docs/Amandeep_Singh_Resume.pdf'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
        <div className='container-fluid home-container'>
          <div className='container home-content'>
            <h1>Hi I'm a</h1>
            <h2>
              <b><Typewriter
                options={{
                  strings: ['Programmer!', 'MERN Stack Developer!'],
                  autoStart: true,
                  loop: true,
                }}
              />
              </b>
            </h2>
            <div className='home-buttons'>
              <button className='btn btn-hire'><b>Hire Me</b></button>
              <a className='btn btn-cv' href={Resume} download="Amandeep_Singh_Resume.pdf"><b>My Resume</b></a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home