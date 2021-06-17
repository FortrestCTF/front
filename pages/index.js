import Header from '../Components/Header/Header'
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop'
import styles from '../styles/Index.module.css'
import Image from 'next/image'

export default function Hub() {
	function smoothScrolling(e)
	{
		e.preventDefault();
		const target = 'section' + e.target.id;
		console.log(target);
		const element = document.getElementById(target);
		element.scrollIntoView({block: 'start', behavior: 'smooth'});
	}
	return (
				<>
				<Header/>
				<main>
						<section id="section1" className={styles.container}>
							<div className={styles.mainsection}>
								<h1>Welcome to <b>FortRest</b> !</h1> 
								<h2>A new way to make, play, manage and enjoy CTF !</h2>
								<ul>
									<li>
										<button id="2" onClick={smoothScrolling}>Play</button>
									</li>
									<li>
										<button id="3" onClick={smoothScrolling}>Create</button>
									</li>
									<li>
										<button id="4" onClick={smoothScrolling}>Manage</button>
									</li>
								</ul>
							</div>
						</section>
						{/* <div className={styles.transition}></div> */}
						<section id="section2" className={styles.main_container}>
							<div> <h1>PLAY !</h1> </div>
							<div className={styles.second_container}>
								<div>
									<h2>Join a CTF has never been as easy as before !</h2>
									<p>
										With FortRest, you can join a CTF simply by creating an account,
										<br/> join the incredible community, and access your favorite CTF with just
										<br/> <b>two clicks !!</b> Join the fun and win as much as you can !
									</p>
									<button>Start playing now !</button>
								</div>
								<div>
									{/*Need to change the height value for responsive for mobile of the div */}
									<Image width={300} height={300} src="/trophy.png"/>
								</div>
							</div>
						</section>
						<section id="section3" className={styles.main_container}>
						<div> <h1>CREATE !</h1> </div>
							<div className={styles.second_container}>
								<div>
									{/*Need to change the height value for responsive for mobile of the div */}
									<Image width={300} height={300} src="/knight.png"/>
								</div>
								<div className={styles.write}>
									<h2>Create a CTF whenever you feel like it, and invite everyone !</h2>
									<p>
										With FortRest, you can create a CTF and invite others people to try it
										<br/> Add your flags, and create a challenge for your players !
										<br/> 
									</p>
									<button>Become an Admin</button>
								</div>
							</div>
						</section>
						<section id="section4" className={styles.main_container}>
							<div> <h1>Manage !</h1> </div>
								<div className={styles.second_container}>
								<div>
									<h2>Create a new CTF platform in no time with our Github !</h2>
									<p>
										Join our open source project with our Github,
										<br/> join the incredible community, help us or give use any feedback !
										<br/> Create your own CTF website with a solid code foundation
									</p>
									<button>Check our Github repository !</button>
								</div>
								<div>
										{/*Need to change the height value for responsive for mobile of the div */}
									<Image width={300} height={300} src="/github.png"/>
								</div>
							</div>
						<ScrollToTop />
						</section>
				</main>
				</>
			)
		}