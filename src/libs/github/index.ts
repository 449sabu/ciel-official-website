import { Octokit } from "octokit";
import axios from "axios";

/**
 * https://docs.github.com/ja/rest/quickstart?apiVersion=2022-11-28&tool=javascript
 */

export const octokit = new Octokit({
	auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN || "",
});

export const fetchArticle = async () => {
	const repo = await octokit.request(
		`GET /repos/449sabu/zenn-posts/contents/articles`,
		{
			owner: "449sabu",
			repo: "zenn-posts",
		}
	);
	return repo.data;
};

export const fetchArticleList = async (): Promise<string[]> => {
	const repo = await fetchArticle();
	const b = repo.filter((e: any) => {
		if (e.name !== ".keep") return e;
	});
	const c = b.map((e: any) => {
		return e.name;
	});
	// console.log(c)
	return c;
};

export const fetchMainText = async (slug: string) => {
	const res = await axios.get(
		`https://raw.githubusercontent.com/449sabu/zenn-posts/main/articles/${slug}`
	);
	return res.data;
};
