import styles from "./styles.module.css";

function Navbar() {
	return (
		<nav className={styles.nav_container}>
			<div className={styles.nav_left}>
				<a href="#home">John</a>
			</div>
			<div className={styles.nav_right}>
				<a href="#about" className={styles.nav_link}>
					<span>01.</span>About
				</a>
				<a href="#experience" className={styles.nav_link}>
					<span>02.</span>Experience
				</a>
				<a href="#work" className={styles.nav_link}>
					<span>03.</span>Work
				</a>
				<a href="#contact" className={styles.nav_link}>
					<span>04.</span>Contact
				</a>
				<button className={styles.nav_resume_btn}>Resume</button>
			</div>
		</nav>
	);
}

export default Navbar;
