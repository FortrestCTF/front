import Header from '../../../../Components/Header/Header'
import SubNavbar from '../../Components/SubNavbar'
import styles from './HubEvent.module.css'
import Image from 'next/image'

export default function HubEvent() {
    return (
        <>
		<Header />
		<SubNavbar />
			<main className={styles.main}>
				<div className={styles.container}>
					<div>
						<h1>NOM DU CTF</h1>
					</div>
				</div>
				<div style={{textAlign: 'center'}}>
					<Image 
						src={"/knight.png"} width={120} height={120}/>
				</div>
				<div className={styles.secondcontainer}>
					<h2>Du 25/12/13</h2>
					<h2>Au 26/12/13</h2>
				</div>
				<div className={styles.containerinfos}>
					<div className={styles.thirdcontainer}>
						<h1 style={{fontSize: '2.8vh'}}>Informations</h1>
					</div>
						<div className={styles.infos}>
							<h3>Nom:</h3>
							<h3>Points:</h3>
							<h3>Classement: ??/??</h3>
						</div>
				</div>
			</main>
        </>
      )
    }