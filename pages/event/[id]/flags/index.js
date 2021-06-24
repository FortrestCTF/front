import Header from '../../../../Components/Header/Header'
import SubNavbar from '../../Components/SubNavbar'
import FlagItem from './FlagItem'
import { useRouter } from 'next/router'

import React from 'react'

import styles from './flags.module.css'

class Flags extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            flags: undefined
        }
    }

    componentDidMount()
    {
        const path = "http://localhost:4000/events/" + window.location.href.split('/')[4] + "/challenges";
        fetch(
            path, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })
        .then( async (res) => {
            const json = res.json();
            json.then((value) => {
                this.setState({flags: value});
            })
        })
        .catch((err) => {
            console.log('ERROR: ' + err.status);
        })
    }

    flagDisplay()
    {
        var elem = this.state.flags;
        console.log(elem);
        return elem.map((elem) => <FlagItem key={elem.id} name={elem.name} description={elem.description} value={elem.points} done={false} url={elem.url} flag={elem.flag}/>);
    }

    render() {
        return (
            <>
                <Header />
                <SubNavbar />
                <section className={styles.maincontainer}>
                {this.state.flags === undefined ? null : this.flagDisplay()}
                </section>
            </>
        )
    }
}

export default Flags;