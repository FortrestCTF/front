import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
        <>
        <header style={{backgroundColor: 'white'}}>
          <div style={{ margin: '0% 1%', display: 'flex', flexDirection: 'row', alignItems: '', paddingBottom: '2%', paddingTop: '1%'}}>
          <Link href="/">
          <Image
            src="/fort-rouge.png"
            alt="logo"
            width={70}
            height={70}
          />
          </Link>
          <p style={{margin: '1% 5%', fontFamily: 'system-ui', fontSize: '30px', }}>Fortrest</p>
          <a style={{fontFamily: 'system-ui', fontSize: '20px', paddingLeft: '70%', paddingTop: '2%'}}> 
          <Link href="/sign_in">
          <a>Sign In</a>
          </Link></a>
          </div>
        </header>
        <body style={{backgroundColor: '#C4C4C4'}}>
          <p>Welcome to my homepage!</p>
        </body>
        </>
      )
    }