import styles from '../styles/sign_in.module.css'
import Header from '../Components/Header/Header'
import withAuth from '../Components/withAuth/withAuth'
import Router from 'next/router'

function Sign_In() {
	const onClickLogin = async event => {
		document.getElementById('input_button').hidden = true;
		document.getElementById('spinner').hidden = false;
		event.preventDefault();
		const form = {
			username: event.target.input_id.value,
			password: event.target.input_pass.value
		}
		await fetch(
			'http://localhost:4000/auth/login', {
			method: "POST",
			headers: {'Content-Type': 'application/json'},
			credentials: 'include',
			body: JSON.stringify(form)
		})
		.then( async (res) => {
			console.log(res);
			if (res.status === 201) {
				document.getElementById('spinner').hidden = true;
				document.getElementById('correct').hidden = false;
				await new Promise(r => setTimeout(r, 2000));
				Router.push('/');
			}
			else {
				document.getElementById('incorrect').hidden = false;
				document.getElementById('spinner').hidden = true;
				document.getElementById('input_button').hidden = false;	
				document.getElementById('input_id').value = "";
				document.getElementById('input_pass').value = "";
			}
		})
		.catch((err) => {
			console.log('ERROR: ' + err.status);
		})
	}
	const onChangeLogin = async e => {
		document.getElementById('incorrect').hidden = true;
		document.getElementById('correct').hidden = true;
		if ((document.getElementById('input_id').value !== "") && (document.getElementById('input_pass').value !== ""))
			document.getElementById('input_button').disabled = false;
		else
			document.getElementById('input_button').disabled = true;
	}
  	return (
        <>
        <Header />
        <div style={{backgroundColor: '#C4C4C4'}}>
			<form onSubmit={onClickLogin} onChange={onChangeLogin} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10%'}}>
				<label style={{paddingBottom: '1%', fontSize: '2.8vw'}} >Login</label>
				<input id="input_id" type="text" autoComplete="name" placeholder='username' required style={{padding: '1% 2%', borderRadius: '5px', border: 'none', marginBottom: '1%'}}/>
				<input id="input_pass" type="password" autoComplete="name" placeholder='password' required style={{padding: '1% 2%', borderRadius: '5px', border: 'none'}}/>
				<button id="input_button" type="submit" disabled={true} style={{marginTop: '1%', backgroundColor: '#D8EAAB', fontFamily: 'system-ui', borderRadius: '5px', border: 'none', padding: '1% 1%'}} >Login</button>
				<span id="incorrect" hidden={true} style={{color: 'red'}}>Login or password incorrect</span>
				<span id="correct" hidden={true} style={{color: 'green'}}>Connected !</span>
				<div id="spinner" className={styles.spinner} hidden={true}>
					<div className={styles.double_bounce1}></div>
					<div className={styles.double_bounce2}></div>
				</div>
			</form>
        </div>
        </>
	)
}

export default withAuth(Sign_In, {pathafterFailure: '/', authorized: ["non-login"]});