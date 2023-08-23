import { fetchMainText, fetchArticleSlugs } from "@/libs/github";
import { css } from "@/styled-system/css";
import { Compiler } from "@/libs/mdx";

export async function generateStaticParams() {
	const slugs = await fetchArticleSlugs();
	return slugs.map((slug) => {
		return {
			slug: slug,
		};
	});
}

const page = async ({ params }: { params: { slug: string } }) => {
	const text = await fetchMainText(params.slug);
	const { content } = await Compiler(text);

	return (
		<div className={css({ m: "1rem" })}>
			My Post: {JSON.stringify(params)}
			{content}
		</div>
	);
};

export default page;
