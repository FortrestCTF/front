import Image from 'next/image'
import Link from 'next/link'

import Header from '../../Components/Header/Header'
import withAuth from '../../Components/withAuth/withAuth'

function JoinEvent() {
    return (
        <>
        <Header />
        <div style={{backgroundColor: '#C4C4C4'}}>
            <form  style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10%'}}>
                <label style={{paddingBottom: '1%'}} >Code</label>
                <input id="name" type="text" autoComplete="name" placeholder='ex : 123456' required style={{padding: '1% 2%', borderRadius: '5px', border: 'none', marginBottom: '1%'}}/>
                <Link href="/central">
                    <button type="submit" style={{marginTop: '1%', backgroundColor: '#D8EAAB', fontFamily: 'system-ui', borderRadius: '5px', border: 'none', padding: '1% 1%'}} >Rejoindre</button>
                </Link>
            </form>
        </div>
        </>
    )
}

export default withAuth(JoinEvent, {pathafterFailure: '/',authorized: ["login", "admin"]});