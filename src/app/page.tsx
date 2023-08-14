// import styles from "./page.module.css";
import { css } from "../../styled-system/css";

export default function Home() {
	return (
		<main>
			<div
				className={css({
					textAlign: "center",
					padding: "1rem",
					fontSize: "10rem",
					fontWeight: "bold",
					color: "myDark",
				})}
			>
				Hello 🐼!
			</div>
		</main>
	);
}
