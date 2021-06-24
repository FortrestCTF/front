
import Router from 'next/router'
import Header from '../../../Components/Header/Header'
import SubAdminNavbar from '../../../Components/SubAdminNavbar/SubAdminNavbar'

export default function Add_flag() {

    async function onSubmitForm(event)
    {
        event.preventDefault();
        const e = event.target;
        
        console.log(window.location.href.split('/'));
        const form = {
            id_event: parseInt(window.location.href.split('/')[4]),
            name: e.name.value,
            description: e.descript.value,
            points: parseInt(e.points.value),
            url: e.url.value,
            flag: e.flag.value
        }
        console.log(form);
        await fetch(
            'http://localhost:4000/events/add_flag', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify(form)
            })
        .then( async (res) => {
            document.getElementById("reset").click();
            document.getElementById('error').hidden = false;
            console.log(res);
		})
		.catch((err) => {
			console.log('ERROR: ' + err.status);
		})
    }

    return (
        <>
        <Header />
        <SubAdminNavbar />
        <div style={{backgroundColor: 'grey', zIndex: '-1'}}>
            <div style={{backgroundColor: 'white', margin: '0% 3% 3% 3%', padding: '1% 1% 12% 1%' ,display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems:'center'}}>
                <form  onChange={() => {document.getElementById('error').hidden = true;}} onSubmit={onSubmitForm} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '5%', width: '50%'}}>
                <label style={{paddingBottom: '1%', fontSize: '50px'}} >Flag</label>
                <input id="url" type="text" placeholder='Download link' required style={{padding: '1% 2%', borderRadius: '5px', marginTop:'10px',}}/>
                <input id="name" type="text" placeholder='Name flag' required style={{padding: '1% 2%', borderRadius: '5px', marginTop:'10px',}}/>
                <input id="descript" type="text" placeholder='Description' required style={{padding: '1% 2%', borderRadius: '5px', marginTop:'10px',}}/>
                <input id="points" type="text" placeholder='Points' required style={{padding: '1% 2%', borderRadius: '5px', marginTop:'10px',}}/>
                <input id="flag" type="text " placeholder='Enter flag code' required style={{padding: '1% 2%', borderRadius: '5px', marginTop:'10px',}}/>
                <input id="reset" type="reset" value="reset" hidden={true}/>
                <span id="error" style={{color: 'green', fontWeight: 'bold'}} hidden={true}>SUCESS !</span>
                    <button type="submit" style={{marginTop: '10px', backgroundColor: '#D8EAAB', fontFamily: 'system-ui', borderRadius: '5px', border: 'none', padding: '1% 1%'}} >Ajouter le flag</button>
                </form>
            </div>
        </div>
        </>
      )
    }