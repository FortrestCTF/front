import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <>
        <header style={{backgroundColor: 'white'}}>
          <div style={{ margin: '0% 1%', display: 'flex', flexDirection: 'row', paddingBottom: '2%', paddingTop: '1%'}} >
          <Link href="/central">
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
            <div style={{backgroundColor: 'white', margin: '2% 3% 3% 3%', padding: '1% 1% 30% 1%' ,display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', alignItems:'center'}}>
            </div>
        </body>
        </>
      )
    }