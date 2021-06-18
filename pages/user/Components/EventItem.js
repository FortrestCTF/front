import styles from '../styles/hub.module.css'

import Image from 'next/image'
import Link from 'next/link'

export default function EvenItem()
{
    return(
        <li className={styles.li}>
            <ul className={styles.infosul}>
                <li className={styles.image}>
                    <Image src="/knight.png" width={80} height={80}/>
                </li>
                <li className={styles.infosli}>
                    NAME OF THE CAPTURE THE FLAG
                </li>
                <li>
                    ??/??
                </li>
                <li>
                    STATUS
                </li>
                <li>
                    <Link href="/event/detail_event"><button className={styles.joinbutton}>JOIN</button></Link>
                </li>
            </ul>
        </li>
    )
}