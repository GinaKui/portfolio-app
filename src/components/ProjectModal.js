import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ProjectModal = (props) => {
  const {
    buttonImg,
    demoImg,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button color="white" onClick={toggle} style={{padding: 0}}>
        <img src={buttonImg} width='100%' height='150px'/>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
        <img src={demoImg} width='100%' height='100%'/>
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