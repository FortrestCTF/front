import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  function Event_tc() {
    var choice = document.getElementById("choicEvent");
    var btn = document.getElementById("myBtn");

    if(choice.style.display == 'none') {
      btn.style.display = 'none'
      choice.style.display = 'flex'
    }
  }
  function Event_tc_close() {
    var choice = document.getElementById("choicEvent");
    var btn = document.getElementById("myBtn");

    if(choice.style.display == 'flex') {
      choice.style.display = 'none'
      btn.style.display = 'block'
    }
  }
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
                <Link href="/detail_event">
                    <Image
                    src="/login.png"
                    alt="logo"
                    width={70}
                    height={70}
                    />
                </Link>
                <div style={{ fontSize: '40px'}}>FLAGS</div>
                  <Image
                    src="/finish.png"
                    alt="logo"
                    width={70}
                    height={70}
                  />
            </div>
                <div style={{display: 'flex', position: 'relative', left: '600px', bottom: '450px'}}>
                  <Link href='/detail_flag'> CECI EST UN FLAG</Link>
                </div>
            <div id="choicEvent"style={{backgroundColor: 'white', display: 'none' , flexDirection: 'row', justifyContent: 'center'}}> 
              <Link href= "/add_flag"> ADD FLAGS </Link>
              <a onClick={Event_tc_close}>
                <Image
                src="/moins.png"
                alt="logo"
                width={30}
                height={30}
                />
              </a>
            </div>
            <a id="myBtn" style={{marginLeft: '50%', display: 'block'}} onClick={Event_tc}>
              <Image
              src="/plus.png"
              alt="logo"
              width={30}
              height={30}
            />
          </a>
        </body>
        </>
      )
    }