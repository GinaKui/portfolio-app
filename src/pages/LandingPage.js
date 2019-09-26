import React from 'react';
import { Jumbotron } from 'reactstrap';

import './LandingPage.css';

const LandingPage = () => {
  return (
    <section className="LandingPage">
      <Jumbotron>
        <h1 className='display-3'>Hello, I'm <span>Gina Kui</span></h1>
        <hr className='my-2' />
        <p className='lead'><strong>MERN</strong> stack web developer</p>
        <ul className='d-flex justify-content-center'>
          <li className='mr-3'>
            <a href='https://github.com/GinaKui'><i className="fab fa-github"></i>&nbsp;github</a>
          </li>
          <li className='mr-3'>
            <a><i className="fab fa-codepen"></i>&nbsp;codepen</a>
          </li>
          <li><a href='https://www.freecodecamp.org/developerkui'><i className="fab fa-free-code-camp"></i>&nbsp;freecodecamp</a></li>
        </ul>
         
        <p>
          <i className="fas fa-envelope"></i>&nbsp;developerkui@outlook.com &#124; 
          <i className="fas fa-phone-alt"></i>&nbsp;(647)766-4746
        </p>
      </Jumbotron>
    </section>
  );
}

export default LandingPage;
