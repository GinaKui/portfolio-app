import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardHeader, CardBody
} from 'reactstrap';


const SkillCard = ({ title, content }) => {
  return (
    <Card className='SkillCard text-center'>
      <CardHeader tag='h3'>{title}</CardHeader>
      <CardBody>
        <CardText>{content}</CardText>
      </CardBody>
    </Card>
  );
};

SkillCard.propType = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default SkillCard;
