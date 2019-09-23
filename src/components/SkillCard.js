import React from 'react';
import {
  Card, CardText, CardHeader, CardBody
} from 'reactstrap';

import './SkillCard.css';

const SkillCard = ({ title, content }) => {
  return (
    <div className='SkillCard'>
      <Card body className='text-center'>
        <CardHeader tag='h3'>{title}</CardHeader>
        <CardBody>
          <CardText>{content}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default SkillCard;
