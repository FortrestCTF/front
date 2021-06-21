import Image from 'next/image'
import Link from 'next/link'
import Header from '../../Components/Header/Header'
import SubAdminNavbar from '../../Components/SubAdminNavbar/SubAdminNavbar'

export default function Add_event() {
    return (
        <>
		<Header />
        <SubAdminNavbar />
        <div style={{backgroundColor: '#C4C4C4', position: 'fixed', width: '100%', height: '100%'}}>
            <div>
            <form  style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '5%'}}>
                <label style={{paddingBottom: '1%'}} >nom:</label>
                <input id="name" type="text" Autocomplete="name" placeholder='ex : Ctf 2000' required style={{padding: '1% 2%', borderRadius: '5px', border: 'none', marginBottom: '1%'}}/>
                <label style={{paddingBottom: '1%'}} >début:</label>
                <input id="name" type="text" Autocomplete="name" placeholder='ex: 26/07/2021' required style={{padding: '1% 2%', borderRadius: '5px', border: 'none', marginBottom: '1%'}}/>
                <label style={{paddingBottom: '1%'}} >fin:</label>
                <input id="name" type="text" Autocomplete="name" placeholder='ex : 28/07/2021' required style={{padding: '1% 2%', borderRadius: '5px', border: 'none', marginBottom: '1%'}}/>
                <Link href="/central">
                    <button type="submit" style={{marginTop: '1%', backgroundColor: '#D8EAAB', fontFamily: 'system-ui', borderRadius: '5px', border: 'none', padding: '1% 1%'}} >Ajouter</button>
                </Link>
            </form>
            </div> 
        </div>
        </>
      )
}