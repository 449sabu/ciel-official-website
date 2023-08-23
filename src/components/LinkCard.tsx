import Link from "next/link";
import { css } from "@/styled-system/css";
import { Stack } from "@/styled-system/jsx";

export interface LinkCardProps {
	url: string;
	title: string;
	description: string;
	og: string | undefined;
	icon: string | undefined;
}

const LinkCard = (props: LinkCardProps) => {
	const { url, title, og, description } = props;

	if (!title || !og) {
		return (
			<Link href={url} target="_blank" className={css({ color: "secondary" })}>
				{url}
			</Link>
		);
	}

	return (
		<div
			className={css({
				maxW: { md: "32rem" },
				h: { base: "6rem", md: "8rem" },
				m: "1rem auto",
				border: "1px solid",
				borderRadius: "xl",
			})}
		>
			<Link href={url} target="_blank">
				<Stack direction="row" alignItems="start" gap="0">
					<Stack p="1rem" w="2/3" justifyContent="space-between">
						<p>{title}</p>
						{/* <p>{description}</p> */}
					</Stack>
					{og ? (
						<img
							src={og}
							width={1200}
							height={630}
							alt="og image"
							className={css({
								h: { base: "6rem", md: "8rem" },
								w: "1/3",
								objectFit: "cover",
								borderRightRadius: "xl",
							})}
						/>
					) : null}
				</Stack>
			</Link>
		</div>
	);
};

export default LinkCard;
