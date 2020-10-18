import React from 'react';

import classes from './Modal.module.css';

import Backdrop from '../Backdrop/Backdrop';

const modal = ( props ) => (
    <div>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(100vh)'
                
            }}>
            <span onClick={props.modalClosed} className={classes.Close}>X</span>
            {props.children}
        </div>
    </div>
);

export default modal;