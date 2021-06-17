import NavItem from './NavItem'
import styles from './Header.module.css'

export default function Check_Connection(fake_connected) {
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
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/join_event">Events</NavItem>
                    <NavItem href="/logout">Logout</NavItem>
                </ul>
        );
    if (fake_connected === ADMIN)
        return (<ul className={styles.navbaritems}>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/add_event">Events</NavItem>
                    <NavItem href="/logout">Logout</NavItem>
                </ul>
        );
}