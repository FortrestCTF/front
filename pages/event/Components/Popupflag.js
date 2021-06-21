import styles from './styles/Popupflag.module.css'

import React from 'react'

class PopUpFlag extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            Popup: false,
            input_value: "",
            valid: -(true)
        }
        this.EventName = this.EventName.bind(this);
        this.Send = this.Send.bind(this);
    }

    EventName(e) {
        console.log(e.target.value);
        this.setState({input_value: e.target.value});
    }

    Send(e) {
        if (this.props.flag === this.state.input_value)
            this.setState({valid: true});
        else
            this.setState({valid: false});
    }

    render ()
    {
        return (
            <div className={styles.popup}>
                    <div className={styles.popup_inner}>
                        <button className={styles.button} onClick={this.props.closePopup}>X</button>
                        <div>
                            <h1 className={styles.h1}>{this.props.h1}</h1>
                            <h2 className={styles.h2}>{this.props.h2}</h2>
                        </div>
                        <a>{this.props.url}</a>
                        <div className={styles.divinput}>
                            <input className={styles.input} type='text' onChange={this.EventName} placeholder="Input the flag here..."></input>
                        </div>
                        <div>
                            <button onClick={this.Send} className={styles.buttonjoin}>Enter the flag</button>
                        </div>
                        <div>
                            {this.state.valid === true ? <span>GOOD JOB !</span> : null}
                            {this.state.valid === false ? <span>WRONG FLAG !</span> : null}
                        </div>
                    </div>
            </div>
        );
    }
}

export default PopUpFlag