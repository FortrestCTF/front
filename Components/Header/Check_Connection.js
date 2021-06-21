import NavItem from './NavItem'
import styles from './Header.module.css'

export default function Check_Connection(fake_connected, value) {
    var NOT_LOGIN = "non-login";
    var USER = "login";
    var ADMIN = "admin";
    if (fake_connected === NOT_LOGIN)
        return (<ul className={styles.navbaritems}>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/sign_in">Sign in</NavItem>
                    <NavItem href="/join">Join the community</NavItem>
                </ul>
        );
    if (fake_connected === USER)
        return (<ul className={styles.navbaritems}>
                    <NavItem href="/user/profil"><img className={styles.image_profil} src="/profil.png"/>{value.username}</NavItem>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/user/hub">Events</NavItem>
                    <NavItem href="/logout">Logout</NavItem>
                </ul>
        );
    if (fake_connected === ADMIN)
        return (<ul className={styles.navbaritems}>
                    <NavItem href="/admin/profil"><img className={styles.image_profil} src="/profil.png"/>{value.username}</NavItem>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/admin/add_event">Manage Events</NavItem>
                    <NavItem href="/logout">Logout</NavItem>
                </ul>
        );
}