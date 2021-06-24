import Header from '../../../../Components/Header/Header'
import SubNavbar from '../../Components/SubNavbar'
import styles from './HubEvent.module.css'
import Image from 'next/image'

import React from 'react'

class HubEvent extends React.Component {

	constructor(props)
	{
		super(props);
		this.state = {
			username: "",
			points: 0,
			ctf_name: "",
			dateDebut: "",
			dateEnd: "",
			leaderboard: "0/30",
			description: ""
		}
	}

	componentDidMount()
	{
		fetch(
            'http://localhost:4000/auth/isLog', {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        })
        .then((res) => {
            const json = res.json();
            json.then((value) => {
				this.setState({username: value.username});
            })
        })
		.catch((err) => {
			this.setState({user: "non-login"});
		})
		var url = window.location.href.split('/')[4];
		fetch(
            'http://localhost:4000/users/event/' + url, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        })
        .then((res) => {
            const json = res.json();
            json.then((value) => {
				console.log(value);
				this.setState({ctf_name: value[0].title, dateDebut: value[0].beginDate, dateEnd: value[0].endDate, description: value[0].description});
            })
        })
		.catch((err) => {
			this.setState({user: "non-login"});
		})
	}

	render () {
    return (
        <>
		<Header />
		<SubNavbar />
			<main className={styles.main}>
				<div className={styles.container}>
					<div>
						<h1>{this.state.ctf_name}</h1>
					</div>
				</div>
				<div style={{textAlign: 'center'}}>
					<Image 
						src={"/knight.png"} width={120} height={120}/>
				</div>
				<div className={styles.secondcontainer}>
					<h2>From {this.state.dateDebut}</h2>
					<h2>To {this.state.dateEnd}</h2>
				</div>
				<h3 style={{textAlign: 'center'}}>{this.state.description}</h3>
				<div className={styles.containerinfos}>
					<div className={styles.thirdcontainer}>
						<h1 style={{fontSize: '2.8vh'}}>Informations</h1>
					</div>
						<div className={styles.infos}>
							<h3>Name: {this.state.username}</h3>
							<h3>Points: {this.state.points}</h3>
							<h3>Leaderboard: {this.state.leaderboard}</h3>
						</div>
				</div>
			</main>
        </>
      )
    }
}

export default HubEvent;