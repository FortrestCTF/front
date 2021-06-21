import React from 'react'
import styles from './Table.module.css'

class Table extends React.Component
{
    render () 
    {
        return (
            <tr className={styles.tr}>
                <td className={styles.td}>
                    {this.props.username}
                </td>
                <td className={styles.td}>
                    {this.props.points}
                </td>
            </tr>
        )
    }
}

export default Table