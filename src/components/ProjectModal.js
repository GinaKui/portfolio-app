import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal,  ModalBody } from 'reactstrap';

const ProjectModal = (props) => {
  const {
    buttonImg,
    demoImg,
    className,
    projectName
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button className="bg-transparent" onClick={toggle} style={{padding: 0}}>
        <img src={buttonImg} width='100%' height='100%' alt={projectName}/>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} centered={true} size='lg'>
        <ModalBody>
        <img src={demoImg} width='100%' height='100%' alt={`demo ${projectName}`}/>
        </ModalBody>
      </Modal>
    </>
  );
};

ProjectModal.propTypes = {
  buttonImg: PropTypes.string.isRequired,
  demoImg: PropTypes.string.isRequired
};

export default ProjectModal;