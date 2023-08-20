import { Stack } from "@/styled-system/jsx";
import { css } from "@/styled-system/css";
import Topics from "@/components/Topics";

const BlogLayout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<Stack
			direction={{ base: "column", md: "row" }}
			gap={6}
			my="5rem"
			p={{ base: "1rem", md: "2rem" }}
		>
			<div
				className={css({
					w: { md: "3/4" },
				})}
			>
				{children}
			</div>
			<div
				className={css({
					w: { md: "1/4" },
				})}
			>
				<Topics />
			</div>
		</Stack>
	);
};

export default BlogLayout;
