import styles from './styles/SubNavbar.module.css'
import NavItem from '../../../Components/Header/NavItem'

import { useRouter } from 'next/router'

export default function SubNavbar()
{
    const router = useRouter()
    const { id } = router.query
    const path = "/event/" + id + "/";
    return (
        <header>
                <ul className={styles.navbaritems}>
                    <NavItem href={path + "hub"}>Hub</NavItem>
                    <NavItem href={path + "flags"}>Flags</NavItem>
                    <NavItem href={path + "classement"}>Leaderboard</NavItem>
                </ul>
        </header>
    )
}