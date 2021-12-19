import { Button, Container } from '@mui/material';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Alert from '@mui/material/Alert';

import './cat_style.css';

const  Example = ()=>{
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Container style={{ paddingTop: '2rem' }}>
      {showButton && (
        <Button
          onClick={() => setShowMessage(true)}
        >
          Show Message
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={1000}
        classNames="cat"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
             <Alert severity="success">This is a success alert — check it out!</Alert>

      </CSSTransition>
    </Container>
  );
}


export default Example;