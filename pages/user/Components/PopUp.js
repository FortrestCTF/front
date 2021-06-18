import React from 'react'
import styles from './Popup.module.css'
import Link from 'next/link'

class PopUp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            Popup: false
        }
    }

    render ()
    {
        return (
            <div className={styles.popup}>
                    <div className={styles.popup_inner}>
                    <button onClick={this.props.closePopup}>X</button>
                        <h1>Join an event</h1>
                        <input type='text' placeholder="0849..."></input>
                        <Link href="/event/detail_event"><button>Join</button></Link>
                    </div>
            </div>
        );
    }
}

export default PopUp;