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
            popup: false,
            events: undefined
        }
    }
    onClickPopup = (e) => {
        this.setState({popup: !this.state.popup});
    }

    async componentDidMount()
    {
        await fetch(
			'http://localhost:4000/users/event/', {
			method: "GET",
			headers: {'Content-Type': 'application/json'},
			credentials: 'include',
		})
		.then( async (res) => {
            const json = res.json();
            json.then((value) => {
                this.setState({events: value});
            })
		})
		.catch((err) => {
			console.log('ERROR: ' + err.status);
		})    
    }

    EventDisplay()
    {
        var elem = this.state.events;
        console.log(elem);
        if (elem.status === 400)
            return (null);
        return elem.map((elem) => <EventItem key={elem.id} id={elem.id} name={elem.title} number={elem.participants} status={!elem.status} />);
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
                        {/* <EventItem id={1} name={"The best CTF"} number={"20/30"} status={true}/>
                        <EventItem id={2} name={"CTF.io"} number={"20/30"} status={false}/> */}
                        {this.state.events === undefined ? null : this.EventDisplay()}
                    </ul>
                </section>
            </main>
        </div>
    )
    }
}

export default withAuth(EventHub, {pathAfterFailure:"/", authorized:["login"]});