import type { Metadata } from "next";
import { HStack } from "@/styled-system/jsx";
import { css } from "@/styled-system/css";

export const metadata: Metadata = {
	title: "CIEL Stake Pool",
	description: "CIEL Stake Pool Official Site.",
};

const BlogLayout = () => {
	return (
		<HStack>
			<div
				className={css({
					w: { md: "2/3" },
				})}
			>
				記事内容
			</div>
			<div
				className={css({
					w: { md: "1/3" },
				})}
			>
				目次など
			</div>
		</HStack>
	);
};

export default BlogLayout;
