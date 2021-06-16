import Header from '../Components/Header/Header'
import styles from '../styles/Index.module.css'

export default function Hub() {
	return (
				<>
				<Header/>
				<main>
						<section id="#section1" className={styles.container}>
							<div className={styles.mainsection}>
								<h1>Welcome to <b>FortRest</b> !</h1> 
								<h2>A new way to make, play, manage and enjoy CTF !</h2>
								<ul>
									<li>
										<button>Play</button>
									</li>
									<li>
										<button>Create</button>
									</li>
									<li>
										<button>Manage</button>
									</li>
								</ul>
							</div>
						</section>
						<div className={styles.transition}></div>
						<section id="#section2" className={styles.secondcontainer}>
							<div>
								<h1>Hello</h1>
								<h1>Hello</h1>
								<h1>Hello</h1>
							</div>
								<h1>Hello !</h1>
								<h1>Hello !</h1>
						</section>
				</main>
				</>
			)
		}