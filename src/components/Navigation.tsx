import Link from "next/link";
import { css } from "@/styled-system/css";
import { Flex } from "@/styled-system/jsx";
import { Box } from "@/recipes/box.css";
import { ColorModeButton } from '@/components'

type NavigationProps = {
	pages: {
		title: string;
		link: string;
	}[];
};

const index = ({ pages }: NavigationProps) => {
	return (
		<Box>
			<Flex
				className={css({
					height: { base: "4rem" },
					width: { base: "100vw",md:"breakpoint-md",lg: "breakpoint-xl" },
					margin: { base: "auto", md: "2rem 0" },
					padding: { base: "1rem" },
				})}
			>
				{pages.map((e, i) => (
					<Link
						href={e.link}
						key={i}
						className={css({ paddingRight: "1rem", _hover: { color: "cyan.600" } })}
					>
						{e.title}
					</Link>
				))}
				<ColorModeButton />
			</Flex>
		</Box>
	);
};

export default index;
