import Header from '../../Components/Header/Header'
import SubAdminNavbar from '../../Components/SubAdminNavbar/SubAdminNavbar'
import styles from '../user/styles/hub.module.css'
import EventItemAdmin from './Components/EventItemAdmin'
import Link from 'next/link'

export default function AdminHub() {
  return (
        <>
			<Header />
			<SubAdminNavbar />
			<section className={styles.container} style={{margin: '3em'}}>
                    <h1 style={{textAlign: 'center', paddingTop: '1.8em', color: 'white'}}><b>Your Events</b></h1>
                    <Link href="/admin/add_event" ><button className={styles.buttonjoin}>Create a new event</button></Link>
                    <ul className={styles.ul}>
                        <EventItemAdmin id={1} name={"CTF Chevalier Maudit"} number={"12/20"} status={"Ongoing"}/>
                        <EventItemAdmin id={2} name={"CTF Ultra Chevalier"} number={"14/20"} status={"Done"}/>
                    </ul>
            </section>
        </>
      )
    }