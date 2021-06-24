import Header from '../../Components/Header/Header'
import SubAdminNavbar from '../../Components/SubAdminNavbar/SubAdminNavbar'
import styles from '../user/styles/hub.module.css'
import EventItemAdmin from './Components/EventItemAdmin'
import Link from 'next/link'
import React from 'react'
import EventItem from '../user/Components/EventItem'

class AdminHub extends React.Component {

	constructor(props)
	{
		super(props);
		this.state = {
			value: null
		}
	}


	componentDidMount()
	{
        fetch(
            'http://localhost:4000/events', {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })
        .then( async (res) => {
            const json = res.json();
            json.then((value) => {
				this.setState({value: value});
            })
        })
        .catch((err) => {
            console.log('ERROR: ' + err.status);
        })
	}

	Display()
	{
		var elem = this.state.value;
		console.log(elem);
		return elem.map((elem) => <EventItemAdmin id={elem.id} name={elem.title} number={elem.participants} status={elem.status} />)
	}

	render() {
		return (
			<>
				<Header />
				<SubAdminNavbar />
				<section className={styles.container} style={{margin: '3em'}}>
						<h1 style={{textAlign: 'center', paddingTop: '1.8em', color: 'white'}}><b>Your Events</b></h1>
						<Link href="/admin/add_event" ><button className={styles.buttonjoin}>Create a new event</button></Link>
						<ul className={styles.ul}>
							{this.state.value === null ? null : this.Display()}
							{/* <EventItemAdmin id={2} name={"CTF Ultra Chevalier"} number={"14/20"} status={"Done"}/> */}
						</ul>
				</section>
			</>
			)
	}
}

export default AdminHub;