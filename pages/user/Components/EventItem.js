import styles from '../styles/hub.module.css'
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

class EventItem extends React.Component
{
    render () {
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
                        <Link href={"/event/" + this.props.id + "/hub"}><button className={styles.joinbutton}>GO</button></Link>
                    </li>
                </ul>
            </li>
        )
    }
}

export default EventItem