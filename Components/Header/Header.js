import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'
import Check_Connection from './Check_Connection'
import React, { useState } from 'react'

const Authorized = (value) => {
    var user = "";

    if (value.token === "incorrect")
        user = "non-login"
    if (value.token === "correct" && value.admin === 0)
        user = "login";
    if (value.token === "correct" && value.admin === 1)
        user = "admin";

    return user;
}

class Header extends React.Component {
	constructor(props)
	{
		super(props);
		this.state = {
			user: "non-login"
		}
	};

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
                const user = Authorized(value);
				console.log(user);
				this.setState({user: user});
            })
        })
	}
	render() {
		return (
			<header>
				<nav className={styles.container}>
					<div className={styles.logo}>
						<Link href="/">
							<a>
								<Image className={styles.logoimg} src="/fort-rouge.png" alt="logo" width={100} height={100}/>
							</a>
						</Link>
						<Image src="/titre.png" alt="slogan" width={400} height={100}/>
					</div>
					{Check_Connection(this.state.user)}
				</nav>
			</header>
		);
	}
}

export default Header;