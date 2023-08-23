import { css } from "@/styled-system/css";
import LinkCard from "@/components/LinkCard";
import type { LinkCardProps } from "@/components/LinkCard";

export const mdxCustomComponents = {
	h1: (props: any) => (
		<h1
			{...props}
			className={css({
				fontSize: "3xl",
				my: "1rem",
				bg: "secondary",
				p: "0.5rem 1rem",
			})}
		/>
	),
	h2: (props: any) => (
		<h2
			{...props}
			className={css({ fontSize: "2xl", my: "1rem", borderBottom: "1px" })}
		/>
	),
	h3: (props: any) => (
		<h3
			{...props}
			className={css({ fontSize: "xl", my: "1rem", borderBottom: "1px" })}
		/>
	),
	a: (props: any) => (
		<a
			{...props}
			className={css({
				color: "secondary",
				my: "1rem",
				textDecoration: "underline",
			})}
		/>
	),
	pre: (props: any) => (
		<pre {...props} className={css({ p: "1rem",my: "1rem", borderRadius: "xl" })} />
	),
	linkcard: (props: LinkCardProps) => <LinkCard {...props} />,
};
