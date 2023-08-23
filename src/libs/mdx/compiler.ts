import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeMermaid from 'rehype-mermaidjs';
import rehypeSlug from 'rehype-slug';
import { mdxCustomComponents } from "@/libs/mdx/mdxCustomComponents";
import { remarkLinkCard, linkCardHandler } from "@/libs/unified/linkcard";
import { remarkZennCode } from "@/libs/unified/zenn-code";
import { print } from "@/libs/unified/mdast-test";
import type { Options } from "rehype-pretty-code";

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
				remarkPlugins: [
					// remarkZennCode,
					remarkBreaks,
					remarkLinkCard,
					remarkGfm,
					print
				],
				rehypePlugins: [
					rehypeSlug,
					// [
						// rehypeMermaid,
						// {
						// 	strategy: 'inline-svg',
						// 	mermaidConfig: {
						// 		fontFamily: 'sans-serif, monospace',
						// 	},
						// },
					// ],
					[rehypePrettyCode, rehypePrettyCodeOptions]],
				remarkRehypeOptions: {
					handlers: {
						linkCard: linkCardHandler,
					},
				},
			},
			parseFrontmatter: true,
		},
	});
	return result;
};

/**
 * https://rehype-pretty-code.netlify.app/
 */
const rehypePrettyCodeOptions: Partial<Options> = {
	theme: {
		light: "dark-plus",
	},
	keepBackground: true,
	onVisitLine(node) {
		if (node.children.length === 0) {
			node.children = [{ type: "text", value: " " }];
		}
	},
	onVisitHighlightedLine(node) {
		node.properties.className?.push("highlighted");
	},
	// onVisitHighlightedWord(node) {
	// 	node.properties.className = ["word"];
	// },
};
