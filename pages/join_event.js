import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <>
        <header style={{backgroundColor: 'white'}}>
          <div style={{ margin: '0% 1%', display: 'flex', flexDirection: 'row', paddingBottom: '2%', paddingTop: '1%'}} >
          <Link href="/hub">
          <Image
            src="/fort-rouge.png"
            alt="logo"
            width={70}
            height={70}
          />
          </Link>
          <p style={{margin: '1% 5% ', fontFamily: 'system-ui', fontSize: '30px' }}>Fortrest</p>
          </div>
        </header>
        <body style={{backgroundColor: '#C4C4C4'}}>
            <form  style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10%'}}>
                <label style={{paddingBottom: '1%'}} >Code</label>
                <input id="name" type="text" autocomplete="name" placeholder='ex : 123456' required style={{padding: '1% 2%', borderRadius: '5px', border: 'none', marginBottom: '1%'}}/>
                <Link href="/hub">
                    <button type="submit" style={{marginTop: '1%', backgroundColor: '#D8EAAB', fontFamily: 'system-ui', borderRadius: '5px', border: 'none', padding: '1% 1%'}} >Rejoindre</button>
                </Link>
            </form>
        </body>
        </>
      )
    }