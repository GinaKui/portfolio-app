import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import './SkillCard.css';

const SkillCard = ({ title, content }) => {
  return (
    <div className='SkillCard'>
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{content}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default SkillCard;
