
import Link from 'next/link'
import Header from '../../Components/Header/Header'

export default function Add_flag() {
    return (
        <>
        <Header />
        <body style={{backgroundColor: 'grey'}}>
            <div style={{backgroundColor: 'white', margin: '0% 3% 3% 3%', padding: '1% 1% 12% 1%' ,display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems:'center'}}>
                <form  style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '5%', width: '50%'}}>
                <label style={{paddingBottom: '1%', fontSize: '50px'}} >Flag</label>
                <input id="name" type="text" autocomplete="name" placeholder='Download link' required style={{padding: '1% 2%', borderRadius: '5px', marginTop:'10px',}}/>
                <input id="name" type="text" autocomplete="name" placeholder='Name flag' required style={{padding: '1% 2%', borderRadius: '5px', marginTop:'10px',}}/>
                <input id="name" type="text" autocomplete="name" placeholder='Difficulty' required style={{padding: '1% 2%', borderRadius: '5px', marginTop:'10px',}}/>
                <input id="name" type="text" autocomplete="name" placeholder='Points' required style={{padding: '1% 2%', borderRadius: '5px', marginTop:'10px',}}/>
                <input id="name" type="text " autocomplete="name" placeholder='Enter code' required style={{padding: '1% 2%', borderRadius: '5px', marginTop:'10px',}}/>
                <Link href="/flageux">
                    <button type="submit" style={{marginTop: '10px', backgroundColor: '#D8EAAB', fontFamily: 'system-ui', borderRadius: '5px', border: 'none', padding: '1% 1%'}} >Ajouter le flag</button>
                </Link>
                </form>
            </div>
        </body>
        </>
      )
    }