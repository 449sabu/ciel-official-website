import { css } from "../styled-system/css";
import { Divider } from "@/styled-system/jsx";

const Footer = () => {
	return (
		<div
			className={css({
				m: "3rem",
				textAlign: "center",
			})}
		>
			<Divider />
			<p
				className={css({
					py: "2rem",
				})}
			>
				&copy; CIEL Stake Pool 2023
			</p>
		</div>
	);
};

export default Footer;
