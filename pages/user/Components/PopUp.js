import React from 'react'
import styles from './Popup.module.css'
import Link from 'next/link'

class PopUp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            Popup: false,
            input_value: ""
        }

        this.EventName = this.EventName.bind(this);
    }


    EventName(e) {
        console.log(e.target.value);
        this.setState({input_value: e.target.value});
    }
    render ()
    {
        return (
            <div className={styles.popup}>
                    <div className={styles.popup_inner}>
                        <button className={styles.button} onClick={this.props.closePopup}>X</button>
                        <div>
                            <h1 className={styles.h1}>Join an event</h1>
                            <h2 className={styles.h2}>Join the fun ! Insert your code to join</h2>
                        </div>
                        <div className={styles.divinput}>
                            <input className={styles.input} type='text' onChange={this.EventName} placeholder="Input your code here..."></input>
                        </div>
                        <div>
                            <Link href={"/event/" + this.state.input_value + "/hub"}><button className={styles.buttonjoin}>Join Now</button></Link>
                        </div>
                        <div>

                        </div>
                    </div>
            </div>
        );
    }
}

export default PopUp;