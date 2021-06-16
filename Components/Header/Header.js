import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'
import Check_Connection from './Check_Connection'

export default function Header() {
	var fake_connected = 2;
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
				{Check_Connection(fake_connected)}
			</nav>
		</header>
  	);
}