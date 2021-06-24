import Header from '../../Components/Header/Header'
import SubAdminNavbar from '../../Components/SubAdminNavbar/SubAdminNavbar'
import Router from 'next/router'

export default function Add_event() {

    
    async function onSubmitForm(event)
    {
        event.preventDefault();
        const e = event.target;
        const form = {
            name: e.name.value,
            description: e.descript.value,
            status: 0,
            participants: "0",
            beginDate: e.dateS.value,
            endDate: e.dateE.value
        }
        await fetch(
			'http://localhost:4000/events', {
			method: "POST",
			headers: {'Content-Type': 'application/json'},
			credentials: 'include',
            body: JSON.stringify(form)
		})
		.then( async (res) => {
            document.getElementById('error').hidden = false;
			await new Promise(r => setTimeout(r, 2000));
			Router.push('/admin');
		})
		.catch((err) => {
			console.log('ERROR: ' + err.status);
		})
    }

    return (
        <>
		<Header />
        <SubAdminNavbar />
        <div style={{backgroundColor: '#C4C4C4', position: 'fixed', width: '100%', height: '100%'}}>
            <div>
            <form onSubmit={onSubmitForm} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '5%'}}>
                <label style={{paddingBottom: '1%'}} >nom:</label>
                <input id="name" type="text" autoComplete="name" placeholder='Ctf 2000' required style={{padding: '1% 2%', borderRadius: '5px', border: 'none', marginBottom: '1%'}}/>
                <label style={{paddingBottom: '1%'}} >description:</label>
                <input id="descript" type="text" autoComplete="name" placeholder='The best ctf !' required style={{padding: '1% 2%', borderRadius: '5px', border: 'none', marginBottom: '1%'}}/>
                <label style={{paddingBottom: '1%'}} >début:</label>
                <input id="dateS" type="text" autoComplete="name" placeholder='26/07/2021' required style={{padding: '1% 2%', borderRadius: '5px', border: 'none', marginBottom: '1%'}}/>
                <label style={{paddingBottom: '1%'}} >fin:</label>
                <input id="dateE" type="text" autoComplete="name" placeholder='28/07/2021' required style={{padding: '1% 2%', borderRadius: '5px', border: 'none', marginBottom: '1%'}}/>
                {/* <Link href="/admin"> */}
                <span id="error" style={{color: 'green', fontWeight: 'bold'}} hidden={true}>SUCESS !</span>
                <button type="submit" style={{marginTop: '1%', backgroundColor: '#D8EAAB', fontFamily: 'system-ui', borderRadius: '5px', border: 'none', padding: '1% 1%', cursor: "pointer"}} >Ajouter</button>
                {/* </Link> */}
            </form>
            </div> 
        </div>
        </>
      )
}