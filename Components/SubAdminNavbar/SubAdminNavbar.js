import Link from 'next/link'
import styles from './styles/SubAdminNavbar.module.css'

export default function SubAdminNavbar()
{
    return (
        <>
            <section className={styles.section}>
                <Link href="/admin/add_event"><h1 className={styles.h1}>Add Event</h1></Link>
                <Link href="/admin"><h1 className={styles.h1}>Your Events</h1></Link>
            </section>
        </>
    )
}