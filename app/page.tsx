import styles from "./page.module.css";
import Calc from "../components/Calc";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<Calc />
			</main>
		</div>
	);
}