import React from 'react'

import styles from './styles/hub.module.css'

import Header from '../../Components/Header/Header'
import withAuth from '../../Components/withAuth/withAuth'
import EventItem from './Components/EventItem'
import Popup from './Components/PopUp'

class EventHub extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            popup: false
        }
    }
    onClickPopup = (e) => {
        this.setState({popup: !this.state.popup});
    }

    render() {
    return(
        <div>
            <Header/>
            {this.state.popup ? <Popup closePopup={this.onClickPopup.bind(this)}/> : null}
            <div className={styles.full_background}></div>
            <main className={styles.whole_page}>
                <section className={styles.main_section}>
                    <h1 style={{padding: '1em 0 1em 0'}} className={styles.h1}>Welcome back <b>{this.props.withAuth.username}</b> !</h1>
                    <h2></h2>
                </section>
                <section className={styles.container}>
                    <h1 style={{textAlign: 'center', paddingTop: '1.8em', color: 'white'}}><b>Your Events</b></h1>
                    <button onClick={this.onClickPopup} className={styles.buttonjoin}>Join a new event</button>
                    <ul className={styles.ul}>
                        <EventItem/>
                        <EventItem/>
                        <EventItem/>
                        <EventItem/>
                        <EventItem/>
                        <EventItem/>
                    </ul>
                </section>
            </main>
        </div>
    )
    }
}

export default withAuth(EventHub, {pathAfterFailure:"/", authorized:["login"]});