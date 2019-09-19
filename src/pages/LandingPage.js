import React from 'react';
import { Jumbotron } from 'reactstrap';

import './LandingPage.css';

const LandingPage = () => {
  return (
    <section className="LandingPage">
      <Jumbotron>
        <h1 className='display-3'>Hello, I'm <span>Gina Kui</span></h1>
        <hr className='my-2' />
        <p className='lead'>MERN stack web developer</p>
        <ul>
          <li><a to="https://github.com/GinaKui">github<i className="fab fa-github"></i></a></li>
          <li><a>codepen<i className="fab fa-codepen"></i></a></li>
          <li><a>freecodecamp<i className="fab fa-free-code-camp"></i></a></li>
        </ul>
         
        <p>
          <i className="fas fa-envelope"></i> developerkui@outlook.com &#124; 
          <i className="fas fa-phone-alt"></i>(647)766-4746
        </p>
      </Jumbotron>
    </section>
  );
}

export default LandingPage;
