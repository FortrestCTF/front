import styles from '../../user/styles/hub.module.css'
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

class EventItemAdmin extends React.Component
{
    render () {
        return(
            <li className={styles.li}>
                <ul className={styles.infosul}>
                    <li className={styles.image}>
                        <Image src="/knight.png" width={80} height={80}/>
                    </li>
                    <li className={styles.infosli}>
                        {this.props.name}
                    </li>
                    <li>
                        {this.props.number}
                    </li>
                    <li>
                        {this.props.status}
                    </li>
                    <li>
                        <Link href={"/admin/add_flag"}><button className={styles.joinbutton}>Manage</button></Link>
                    </li>
                </ul>
            </li>
        )
    }
}

export default EventItemAdmin