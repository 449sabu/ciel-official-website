import { Stack } from "@/styled-system/jsx";
import { css } from "@/styled-system/css";
import Topics from "@/components/Topics";

const BlogLayout = async({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<Stack direction="row" gap={6} my="5rem">
			<div
				className={css({
					w: { md: "3/4" },
					border: "1px solid",
				})}
			>
        {children}
			</div>
			<div
				className={css({
					w: { md: "1/4" },
					p: "2rem 0.5rem",
				})}
			>
				<Topics />
			</div>
		</Stack>
	);
};

export default BlogLayout;
