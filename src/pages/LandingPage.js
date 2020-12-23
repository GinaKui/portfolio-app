import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const LandingPage = () => {
  return (
    //<section className="LandingPage">
      <Jumbotron>
        <h1 className='display-3'>Hello, I'm <span>Gina Kui</span></h1>
        <hr className='my-2' />
        <p className='lead'><strong>MERN</strong> stack web developer living in Toronto</p>
        <ul className='d-flex justify-content-center'>
          <li style={{marginLeft: '-30px'}}>
            <Button outline color="dark" target="_blank" href='https://github.com/GinaKui'><i className="fab fa-github"></i>&nbsp;github</Button>
          </li>
          <li className='ml-3'>
            <Button outline color="dark" target="_blank" href='https://codepen.io/ginakui/pens/popular'><i className="fab fa-codepen"></i>&nbsp;codepen</Button>
          </li>
          <li className='ml-3'>
            <Button outline color="dark" target="_blank" href='https://www.freecodecamp.org/developerkui'><i className="fab fa-free-code-camp"></i>&nbsp;freecodecamp</Button>
          </li>
        </ul>
         
        <p>
          <a href="mailto:developerkui@outlook.com">
            <i className="fas fa-envelope"></i>&nbsp;developerkui@outlook.com &nbsp;&#124; &nbsp;
          </a>
          <a href="tel:+1.647.766.4746">
            <i className="fas fa-phone-alt"></i>&nbsp;(647)766-4746
          </a>
        </p>
      </Jumbotron>
   // </section>
  );
}

export default LandingPage;
