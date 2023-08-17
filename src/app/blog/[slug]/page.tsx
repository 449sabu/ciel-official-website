import { MDXRemote } from "next-mdx-remote/rsc";
import matter from 'gray-matter';
import { fetchArticle, fetchMainText } from "@/libs/github";
import {css} from '@/styled-system/css'

export async function generateStaticParams() {
	const repo = await fetchArticle();
	return repo.filter((data: any) => {
		if (data.name !== ".keep")
			return {
				slug: data.name,
			};
	});
}

const page = async ({ params }: { params: { slug: string } }) => {
	const text = await fetchMainText(params.slug);
	const { data, content } = matter(text);

	return (
		<div
		className={css({ m: "1rem"})}>
			My Post: {JSON.stringify(params)}
			<MDXRemote
				source={content}
			/>
		</div>
	);
};

export default page;
