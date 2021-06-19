import Image from 'next/image'
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
          <div style={{ margin: '0% 1%', display: 'flex', flexDirection: 'row', paddingBottom: '2%', paddingTop: '1%', justifyContent: ''}} >
          <Link href="/central">
          <Image
            src="/fort-rouge.png"
            alt="logo"
            width={70}
            height={70}
          />
          </Link>
          <p style={{margin: '1% 5% ', fontFamily: 'system-ui', fontSize: '30px' }}>Fortrest</p>
          <div style={{paddingLeft: '70%', display: 'flex', justifyContent: 'center'}}>
            <Link href='/'>Log out</Link>
          </div>
          </div>
        </header>
        <body style={{backgroundColor: '#C4C4C4'}}>
            <div style={{backgroundColor: 'white', margin: '2% 3% 3% 3%', padding: '1% 1% 30% 1%'}}>
              <Link href= "/detail_event"> 
                  <div style={{backgroundColor: '#D8E8CF', margin: '1', padding: '1% 1% 1% 1%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <p>Admin</p>
                    <p>CTF 2000</p>
                    <p>15/30</p>
                    <p>terminé</p>
                  </div>
              </Link>
              </div>
            <div id="choicEvent"style={{backgroundColor: 'white', display: 'none' , flexDirection: 'row', justifyContent: 'space-around'}}> 
              <Link href= "/add_event"> ADD EVENT </Link>
              <a onClick={Event_tc_close}>
                <Image
                src="/moins.png"
                alt="logo"
                width={30}
                height={30}
                />
              </a>
              <Link href= "/join_event"> JOIN EVENT </Link>
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