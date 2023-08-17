import { NextPage } from "next";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { VStack } from "@/styled-system/jsx";
import { css } from "@/styled-system/css";
import { fetchArticleList, fetchMainText } from "@/libs/github";

interface FrontMatter {
	title: string;
	topics: string[];
	published: boolean;
}

const Blog: NextPage = async () => {
	const slugList = await fetchArticleList();
	const contents = await Promise.all(
		slugList.map(async (data) => {
			const mainText = await fetchMainText(data);
			const { frontmatter } = await compileMDX<FrontMatter>({
				source: mainText,
				options: { parseFrontmatter: true },
			});
			return {
				slug: data,
				frontmatter: frontmatter,
			};
		})
	);

	console.log(contents);

	return (
		<main>
			<VStack>
				{contents.map((content, i) => (
					<Link
						href={`/blog/${content.slug}.md`}
						key={i}
						className={css({
							h: { md: "6rem" },
							w: "100%",
							border: "1px solid",
						})}
					>
						{content.frontmatter.title}
					</Link>
				))}
			</VStack>
		</main>
	);
};

export default Blog;
