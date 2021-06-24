import React from 'react'
import styles from './Popup.module.css'
import Link from 'next/link'
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie'

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
        this.Join = this.Join.bind(this);
    }

    EventName(e) {
        console.log(e.target.value);
        this.setState({input_value: e.target.value});
    }

    async Join()
    {
        const form = {
            event: parseInt(this.state.input_value)
        }
        console.log(JSON.stringify(form))
        await fetch(

			'http://localhost:4000/events/join', {
			method: "POST",
			headers: {'Content-Type': 'application/json'},
			credentials: 'include',
            body: JSON.stringify(form)
		})
		.then( async (res) => {
            const json = res.json();
            json.then((value) => {
                console.log(value);
            })
		})
		.catch((err) => {
			console.log('ERROR: ' + err.status);
		})  
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
                            <Link href={"/event/" + this.state.input_value + "/hub"}><button onClick={this. Join} className={styles.buttonjoin}>Join Now</button></Link>
                        </div>
                        <div>

                        </div>
                    </div>
            </div>
        );
    }
}

export default PopUp;