import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'
import Check_Connection from './Check_Connection'
import React from 'react'

const Authorized = (value) => {
    var user = "non-login";

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
			user: "",
			value: {}
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
				console.log(value);
                const user = Authorized(value);
				this.setState({user: user, value: value});
            })
        })
		.catch((err) => {
			this.setState({user: "non-login"});
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
					{Check_Connection(this.state.user, this.state.value)}
				</nav>
			</header>
		);
	}
}

export default Header;