import { Octokit } from "octokit";
import axios from "axios";
import type { FrontMatter, AllArticles } from "@/types";
import { Compiler } from "@/libs/mdx";
/**
 * https://docs.github.com/ja/rest/quickstart?apiVersion=2022-11-28&tool=javascript
 */

export const octokit = new Octokit({
	auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN || "",
});

export const fetchArticleSlugs = async (): Promise<string[]> => {
	const repo = await octokit.request(
		`GET /repos/449sabu/${process.env.GITHUB_REPO}/contents/articles`,
		{
			owner: "449sabu",
			repo: process.env.GITHUB_REPO,
		}
	);
	return repo.data
		.filter((article: any) => article.name !== ".keep")
		.map((article: { name: string }) => article.name);
};

// 受け取った slug のテキストを返す
export const fetchMainText = async (slug: string) => {
	const res = await axios.get(
		`https://raw.githubusercontent.com/449sabu/${process.env.GITHUB_REPO}/main/articles/${slug}`
	);
	return res.data;
};

// FrontMatterの配列を返す
export const getAllArticles = async () => {
	const slugs = await fetchArticleSlugs();
	const frontmatters = await Promise.all(
		slugs.map(async (slug) => {
			const text = await fetchMainText(slug);
			const { frontmatter } = await Compiler(text);
			return {
				slug,
				frontmatter,
			};
		})
	);
	return frontmatters;
};

// 重複したトピックをカットしてトピックの配列を返す
export const getAllTopics = (articles: AllArticles[]): string[] => {
	const topics = articles.map((article) => article.frontmatter.topics).flat();
	const topicList = topics.filter(
		(elem, index) => topics.indexOf(elem) === index
	);
	return topicList;
};

/*  Paginationの関数。１ページに表示したい記事の数を引数に取る
    ページ数を返す
*/
// export const getPagination = async (pageSize: number) => {
//   const articles = await fetchArticleList();
//   const range = (start: number, end: number, length = end - start + 1) =>
//     Array.from({ length }, (_, i) => start + i);
//   const pages = range(1, Math.ceil(articles.length / pageSize));

//   return pages;
// };