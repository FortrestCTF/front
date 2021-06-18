import Image from 'next/image'
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
        <body style={{backgroundColor: 'white'}}>
            <div style={{backgroundColor: 'white', margin: '10px 10px 10px 10px', padding: '10px 10px 10px 10px' ,display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Link href="/central">
                    <Image
                    src="/login.png"
                    alt="logo"
                    width={70}
                    height={70}
                    />
                </Link>
                <div>CTF 2000</div>
                <div>25/12/2020</div>
                <div>27/12/2020</div> 
            </div>
            <div style={{backgroundColor: 'white', display: 'flex', justifyContent: 'space-around'}}>
                  <div>Information :</div>
                <div style={{display: 'flex', flexDirection:'column'}}>
                  <div>antoine</div> 
                  <div>3/30</div>
                  <div>120pts</div>
                </div>
                <div style={{display: 'flex', flexDirection:'column'}}>
                  <Link href="/classement">Classement</Link>
                  <Link href="/flageux">Flag</Link>
                </div>
            </div>
        </body>
        </>
      )
    }