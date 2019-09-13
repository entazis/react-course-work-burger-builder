import React, { Component } from 'react';
import classes from './modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (!this.props.show && nextProps.show) || (this.props.show && !nextProps.show);
    }

    render () {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.close}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}

export default Modal;
