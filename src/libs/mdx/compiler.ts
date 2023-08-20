import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxCustomComponents } from "@/libs/mdx/mdxCustomComponents";

export interface FrontMatter {
	title: string;
	topics: string[];
	published: boolean;
	type: string;
	image: string;
	description: string;
}

export const Compiler = async (source: string) => {
	const result: Promise<{
		content: JSX.Element;
		frontmatter: FrontMatter;
	}> = compileMDX({
		source,
		components: mdxCustomComponents,
		options: {
			mdxOptions: {
				recmaPlugins: [remarkGfm],
				rehypePlugins: [],
			},
			parseFrontmatter: true,
		},
	});
	return result;
};
